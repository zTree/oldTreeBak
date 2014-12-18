var GameTree = (function () {
    var NewId = '######';
    var ATTR = {
        'POWER': 'power',
        'ExternalID': 'externalID',
        'ExternalTime': 'externalTime',
		'STATUS': 'status'
    };
    var utils = {
        getJson: function(json, attr) {
			if (!json) {
				return null;
			}
			var k, result = {};
			for (k in attr) {
				if (attr.hasOwnProperty(k)) {
					result[k] = json[k];
				}
			}
			return result;
		}
    };
    var leftTree = {
        PowerOffClass: {
            'main':'powerOff',
            'on': 'on',
            'off': 'off'
        },
        callback: {
            add: null,
            changeStatus: null,
            remove: null,
			rename: null,
			sorted: null
        },
        init: function (setting, nodes, options) {
            if (options && options.callback) {
                if (options.callback.add) {
                    leftTree.callback.add = options.callback.add;
                }
                if (options.callback.changeStatus) {
                    leftTree.callback.changeStatus = options.callback.changeStatus;
                }
                if (options.callback.remove) {
                    leftTree.callback.remove = options.callback.remove;
                }
                if (options.callback.rename) {
                    leftTree.callback.rename = options.callback.rename;
                }
                if (options.callback.sorted) {
                    leftTree.callback.sorted = options.callback.sorted;
                }
            }
            leftTree.treeObj = $.fn.zTree.init($('#' + options.treeId), setting, nodes);
        },
		call: {
			add: function(treeNodes) {
				if (!leftTree.callback.add) {
					return;
				}
                var folderOptions, gameOptions, tmp, result =[],
                    i, j, n;

                folderOptions = {
					tId: 1,
                    id: 1,
                    pId: 1,
                    name: 1
                };
                gameOptions = {
					tId: 1,
					id: 1,
                    pId: 1,
                    name: 1
                };
                folderOptions[ATTR.POWER] = 1;
                folderOptions[ATTR.ExternalID] = 1;
                gameOptions[ATTR.POWER] = 1;
                gameOptions[ATTR.ExternalID] = 1;
                gameOptions[ATTR.ExternalTime] = 1;

                for (i=0, j=treeNodes.length; i<j; i++) {
                    n = treeNodes[i];
                    tmp = utils.getJson(n, leftTree.isFolder(n) ? folderOptions : gameOptions);
                    tmp.position = leftTree.getNodeIndex(n);
                    result.push(tmp);
                }
				leftTree.callback.add(result, leftTree.updateNodeId);
			},
			changeStatus: function(treeNodes) {
				if (!treeNodes || !leftTree.callback.changeStatus) {
					return;
				}
				var i, j, n, result = [],
					statusOptions = {
						id: 1
					};
				statusOptions[ATTR.POWER] = 1;
				for (i=0, j=treeNodes.length; i<j; i++) {
					n = utils.getJson(treeNodes[i], statusOptions);
					result.push(n);
				}
				leftTree.callback.changeStatus(result);
			},
			remove: function(treeNode) {
				if (leftTree.callback.remove && !treeNode.isNew) {
					leftTree.callback.remove(treeNode.id);
				}
			},
			rename: function(treeNode) {
				if (!leftTree.callback.rename) {
					return;
				}
				var updateOptions = {
					id: 1,
					name: 1
				};
                var result = utils.getJson(treeNode, updateOptions);
				leftTree.callback.rename(result);
			},
			sorted: function(treeNode) {
				if (!leftTree.callback.sorted) {
					return;
				}
				var updateOptions = {
					id: 1,
                    pId: 1
				};
                var result = utils.getJson(treeNode, updateOptions);
                result.position = leftTree.getNodeIndex(treeNode);
				leftTree.callback.sorted(result);
			}
		},
		addHoverDom: function (treeId, treeNode) {
			var nodeId = treeNode.tId;
			var addStr, $add,
				$a = $('#' + nodeId + '_a'),
				$edit = $('span.edit', $a),
				$remove = $('span.remove', $a),
				$addBtn = $('#' + 'addBtn_' + treeNode.tId);
			$edit.before($remove);
			if (leftTree.isFolder(treeNode)) {
				if (treeNode.editNameFlag || $addBtn.length > 0) return;
				addStr = '<span class="button add" id="addBtn_' + treeNode.tId
					+ '" title="add node" onfocus="this.blur();"></span>';
				$edit.after(addStr);
				$add = $("#addBtn_" + treeNode.tId);
				if ($add) $add.bind("click", function () {
					var newFolder = {id: NewId, pId: treeNode.id, name: '', isParent: true, isNew: true, isManual: true};
                    leftTree.addFolder(treeNode, newFolder);
					return false;
				});
			}
		},
        addFolder: function(parentNode, newFolder) {
            newFolder[ATTR.POWER] = true;
            newFolder[ATTR.ExternalID] = 0;
            var nodes = leftTree.treeObj.addNodes(parentNode, newFolder);
            if (parentNode && nodes[0].getPreNode()) {
                leftTree.treeObj.moveNode(parentNode.children[0], nodes[0], 'prev');
            }
            leftTree.treeObj.editName(nodes[0]);
        },
		beforeRemove: function (treeId, treeNode) {
			return confirm('Do you really want to delete?');
		},
		beforeRename: function (treeId, treeNode, newName, isCancel) {
			var isEmpty = !$.trim(newName);
			if (!isCancel) {
				treeNode.oldName = treeNode.name;
			}

			return isCancel || !isEmpty;
		},
//        beforeDrop: function (treeId, treeNodes, targetNode, moveType) {
//            return true;
//        },
		getNodeIndex: function(treeNode) {
            var nodes, i, j,
                p = treeNode.getParentNode();
            if (p) {
                nodes = p.children;
            } else {
                nodes = leftTree.treeObj.getNodes();
            }
            for (i=0, j=nodes.length; i<j; i++) {
                if (nodes[i] == treeNode) {
                    return i;
                }
            }
            return -1;
        },
        isFolder: function (treeNode) {
            return treeNode.isParent;
        },
//        showRemoveBtn: function (treeId, treeNode) {
//            return true;
//        },
//        showRenameBtn: function (treeId, treeNode) {
//            return true;
//        },
        onDrop: function (event, treeId, treeNodes, targetNode, moveType) {
            leftTree.call.sorted(treeNodes[0]);
        },
        onDropPrev: function(treeId, nodes, targetNode) {
            var isRoot = targetNode.level === 0,
                isSrcGame = !nodes[0].isParent;
            return !isSrcGame || (isSrcGame && !isRoot);
        },
        onDropNext: function(treeId, nodes, targetNode) {
            var isRoot = targetNode.level === 0,
                isSrcGame = !nodes[0].isParent;
            return !isSrcGame || (isSrcGame && !isRoot);
        },
        onDropInner: function(treeId, nodes, targetNode) {
            var isRoot = !targetNode,
                isSrcGame = !nodes[0].isParent,
                isTargetGame = !isRoot && !targetNode.isParent;
            return !(isTargetGame || (isSrcGame && isRoot));
        },
        onNodeCreated: function (event, treeId, treeNode) {
            var nodeId = treeNode.tId;
            var $a = $('#' + nodeId + '_a'),
                $ico = $('#' + nodeId + '_ico');
            var powerOff = '<span class="button ' + leftTree.PowerOffClass.main + '"></span>',
				gameInfo = [];

            $a.addClass(treeNode.isParent ? 'folder' : 'game')
				.addClass(!treeNode[ATTR.ExternalID] ? 'manual' : '');
            $ico.before(powerOff);
			if (!!treeNode[ATTR.ExternalID]) {
				gameInfo = ['<span class="gameInfo" id="gameInfo_', treeNode.tId,
					'" ><span class="gameId">ID: ', treeNode[ATTR.ExternalID], '</span>'];
                gameInfo.push('<span class="gameTime">', treeNode[ATTR.ExternalTime], '</span>');
                gameInfo.push('</span>');
				$a.append(gameInfo.join(''));
			}
            leftTree.showPowerOff(treeNode);
        },
        onClick: function (event, treeId, treeNode) {
            var target = $(event.target), powerOffBtn;
            powerOffBtn = target.closest('.' + leftTree.PowerOffClass.main);
            if (powerOffBtn && powerOffBtn.length > 0) {
                leftTree.switchPowerOff(treeNode);
            } else if (treeNode.isParent) {
                leftTree.treeObj.expandNode(treeNode, !treeNode.open);
            }
        },
        onRemove: function (event, treeId, treeNode) {
            leftTree.call.remove(treeNode);
        },
        onRename: function (event, treeId, treeNode, isCancel) {
            if (isCancel && treeNode.isNew) {
                leftTree.treeObj.removeNode(treeNode);
            }

            if (!isCancel && treeNode.name != treeNode.oldName) {
                if (treeNode.isNew) {
                    leftTree.call.add([treeNode]);
                } else {
					leftTree.call.rename(treeNode);
                }
                delete treeNode.isNew;
                delete treeNode.oldName;
            }
        },
        removeHoverDom: function (treeId, treeNode) {
            $("#addBtn_" + treeNode.tId).unbind().remove();
        },
        switchPowerOff: function (treeNode, power, isSameID) {
            treeNode[ATTR.POWER] = (power === undefined) ? !treeNode[ATTR.POWER] : !!power;
            leftTree.showPowerOff(treeNode);

            var i, j, n, nodes, result = [treeNode];
            if (!isSameID && treeNode.children) {
                for (i=0,j=treeNode.children.length; i<j; i++) {
                    n = treeNode.children[i];
                    result = result.concat(leftTree.switchPowerOff(n, treeNode[ATTR.POWER], false));
                }
            } else if (!isSameID && !leftTree.isFolder(treeNode)) {
                nodes = leftTree.treeObj.getNodesByParam(ATTR.ExternalID, treeNode[ATTR.ExternalID]);
                for (i=0,j=nodes.length; i<j; i++) {
                    n = nodes[i];
                    if (n != treeNode) {
                        leftTree.switchPowerOff(n, treeNode[ATTR.POWER], true);
                        result.push(n);
                    }
                }
            }

            if (power === undefined) {
                leftTree.call.changeStatus(result);
            }
            return result;
        },
        showPowerOff: function (treeNode) {
            var nodeId = treeNode.tId;
            var powerOff = $('#' + nodeId + '_a span.' + leftTree.PowerOffClass.main);
            powerOff.attr('class', 'button ' + leftTree.PowerOffClass.main + ' ' +
                (treeNode[ATTR.POWER] ? leftTree.PowerOffClass.on : leftTree.PowerOffClass.off))
        },
        showLeftID: function (flag) {
            if (flag) {
                leftTree.treeObj.setting.treeObj.removeClass('hideId');
            } else {
                leftTree.treeObj.setting.treeObj.addClass('hideId');
            }

        },
        showLeftTime: function (flag) {
            if (flag) {
                leftTree.treeObj.setting.treeObj.removeClass('hideTime');
            } else {
                leftTree.treeObj.setting.treeObj.addClass('hideTime');
            }
        },
		updateNodeId: function (data) {
			if (!data) {
				return;
			}
			var i, j, d, n;
			for (i=0, j=data.length; i<j; i++) {
				d = data[i];
				n = leftTree.treeObj.getNodeByTId(d.tId);
				if (n) {
					n.id = d.id;
				}
			}
		}
    };
    var rightTree = {
        curStatusNode: null,
        StatusData: {
            '1': 'green',
            '2': 'silver',
            '3': 'orange',
            '4': 'red',
            'green': '1',
            'silver': '2',
            'orange': '3',
            'red': '4'
        },
        StatusClass: {
            'main': 'gameStatus',
            'btn': 'btn',
            'green': 'green',
            'silver': 'silver',
            'orange': 'orange',
            'red': 'red',
            'all': 'all'
        },
        callback: {
            changeStatus: null
        },
        init: function (setting, nodes, options) {
            if (options && options.callback) {
                if (options.callback.changeStatus) {
                    rightTree.callback.changeStatus = options.callback.changeStatus;
                }
            }
            rightTree.treeObj = $.fn.zTree.init($('#' + options.treeId), setting, nodes);
            $(document.body).bind('click', function (e) {
                var t = $(e.target);
                if (t.hasClass(rightTree.StatusClass.btn) || t.parent().hasClass(rightTree.StatusClass.btn)) {
                    return;
                }
                rightTree.hideCurStatus();
            })
        },
		call: {
			changeStatus: function(treeNode) {
				if (!treeNode || !rightTree.callback.changeStatus) {
					return;
				}
				var statusOptions = {
						id: 1
					};
				statusOptions[ATTR.STATUS] = 1;
				rightTree.callback.changeStatus(utils.getJson(treeNode, statusOptions));
			}
		},
        beforeDrop: function (treeId, treeNodes, targetNode, moveType) {
            var nodes, i, j, n;
            if (treeNodes[0][ATTR.POWER] == undefined) {
                nodes = rightTree.treeObj.transformToArray(treeNodes);
                for (i=0,j=nodes.length; i<j; i++) {
                    n = nodes[i];
                    n[ATTR.POWER] = true;
                }
            }
            return true;
        },
        onDrop: function (event, treeId, treeNodes, targetNode, moveType) {
            leftTree.call.add(leftTree.treeObj.transformToArray(treeNodes[0]));
        },
        onNodeCreated: function (event, treeId, treeNode) {
            var nodeId = treeNode.tId;
            var $a = $('#' + nodeId + '_a');
            var status = '<span class="' + rightTree.StatusClass.main + ' ' + rightTree.status2css(treeNode[ATTR.STATUS]) + '">' +
                '<span class="' + rightTree.StatusClass.btn + ' ' + rightTree.StatusClass.green + '"><span class="button"></span></span>' +
                '<span class="' + rightTree.StatusClass.btn + ' ' + rightTree.StatusClass.silver + '"><span class="button"></span></span>' +
                '<span class="' + rightTree.StatusClass.btn + ' ' + rightTree.StatusClass.orange + '"><span class="button"></span></span>' +
                '<span class="' + rightTree.StatusClass.btn + ' ' + rightTree.StatusClass.red + '"><span class="button"></span></span>' +
                '</span>',
                gameInfo = [];
            $a.addClass(treeNode.isParent ? 'folder' : 'game');
            $a.append(status);

            if (!!treeNode[ATTR.ExternalID]) {
                gameInfo = ['<span class="gameInfo" id="gameInfo_', treeNode.tId,
                    '" ><span class="gameId">ID: ', treeNode[ATTR.ExternalID], '</span>'];
                gameInfo.push('<span class="gameTime">', treeNode[ATTR.ExternalTime], '</span>');
                gameInfo.push('</span>');
                $a.append(gameInfo.join(''));
            }
        },
        onClick: function (event, treeId, treeNode) {
            var target = $(event.target), statusBtn, gameStatus;
            statusBtn = target.closest('.' + rightTree.StatusClass.btn);
            if (statusBtn && statusBtn.length > 0) {
                gameStatus = statusBtn.parent('.' + rightTree.StatusClass.main);
                if (gameStatus.hasClass(rightTree.StatusClass.all)) {
                    rightTree.setStatus(treeNode, rightTree.css2status(statusBtn.attr('class')));
                } else {
                    rightTree.showStatus(treeNode, true);
                }
            } else if (treeNode.isParent) {
                rightTree.treeObj.expandNode(treeNode, !treeNode.open);
            }
        },
        showStatus: function (treeNode, isAll) {
            var nodeId = treeNode.tId;
            var gameStatus = $('#' + nodeId + '_a span.' + rightTree.StatusClass.main);
            if (isAll) {
                rightTree.hideCurStatus();
                rightTree.curStatusNode = treeNode;
                gameStatus.attr('class', rightTree.StatusClass.main + ' ' + rightTree.StatusClass.all);
            } else {
                gameStatus.attr('class', rightTree.StatusClass.main + ' ' + rightTree.status2css(treeNode[ATTR.STATUS]));
            }
        },
        status2css: function (status) {
            return rightTree.StatusClass[rightTree.StatusData[status]];
        },
        css2status: function (css) {
            var status = css.replace(rightTree.StatusClass.btn, '').replace(' ', '');
            return rightTree.StatusData[status];
        },
        setStatus: function (treeNode, status) {
            if (status && treeNode[ATTR.STATUS] != status) {
                treeNode[ATTR.STATUS] = status;
                rightTree.call.changeStatus(treeNode);
            }
            rightTree.showStatus(treeNode, false);
        },
        hideCurStatus: function () {
            if (rightTree.curStatusNode) {
                rightTree.setStatus(rightTree.curStatusNode, false);
            }
        },
        showRightID: function (flag) {
            if (flag) {
                rightTree.treeObj.setting.treeObj.removeClass('hideId');
            } else {
                rightTree.treeObj.setting.treeObj.addClass('hideId');
            }

        },
        showRightTime: function (flag) {
            if (flag) {
                rightTree.treeObj.setting.treeObj.removeClass('hideTime');
            } else {
                rightTree.treeObj.setting.treeObj.addClass('hideTime');
            }
        }
    };
    var leftSetting = {
            edit: {
                enable: true,
                drag: {
                    isCopy: false,
                    isMove: true,
                    prev: leftTree.onDropPrev,
                    next: leftTree.onDropNext,
                    inner: leftTree.onDropInner
                }
//                showRemoveBtn: leftTree.showRemoveBtn,
//                showRenameBtn: leftTree.showRenameBtn
            },
            data: {
                keep: {
                    parent: true,
                    leaf: true
                },
                simpleData: {
                    enable: true
                }
            },
            callback: {
                beforeRemove: leftTree.beforeRemove,
                beforeRename: leftTree.beforeRename,
//                beforeDrop: leftTree.beforeDrop,
                onDrop: leftTree.onDrop,
                onNodeCreated: leftTree.onNodeCreated,
                onClick: leftTree.onClick,
                onRemove: leftTree.onRemove,
                onRename: leftTree.onRename
            },
            view: {
                addHoverDom: leftTree.addHoverDom,
                dblClickExpand: false,
                removeHoverDom: leftTree.removeHoverDom,
                selectedMulti: false,
                showIcon: false,
                showLine: false
            }
        },
        rightSetting = {
            edit: {
                enable: true,
                drag: {
                    isCopy: true,
                    isMove: false,
                    prev: false,
                    next: false,
                    inner: false
                },
                showRemoveBtn: false,
                showRenameBtn: false
            },
            data: {
                simpleData: {
                    enable: true
                }
            },
            callback: {
                beforeDrop: rightTree.beforeDrop,
                onDrop: rightTree.onDrop,
                onNodeCreated: rightTree.onNodeCreated,
                onClick: rightTree.onClick
            },
            view: {
                dblClickExpand: false,
                selectedMulti: false,
                showIcon: false,
                showLine: false
            }
        };


    return {
        addLeftRoot: function(node) {
            leftTree.addFolder(null, node);
        },
        initLeft: function (nodes, options) {
            leftTree.init(leftSetting, nodes, options);
        },
        initRight: function (nodes, options) {
            rightTree.init(rightSetting, nodes, options);
        },
        expandLeft: function (flag) {
            leftTree.treeObj.expandAll(!!flag);
        },
        expandRight: function (flag) {
            rightTree.treeObj.expandAll(!!flag);
        },
        showLeftID: function (flag) {
            leftTree.showLeftID(flag);
        },
        showLeftTime: function (flag) {
            leftTree.showLeftTime(flag);
        },
        showRightID: function (flag) {
            rightTree.showRightID(flag);
        },
        showRightTime: function (flag) {
            rightTree.showRightTime(flag);
        }
    };
})();
