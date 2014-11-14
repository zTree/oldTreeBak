var donateContent = {
	contentBox:null,

	divList: [],
	_init: function() {
		this.contentBox = $("#contentBox");
		this.divList["donateInfo"] = $("#donateInfo");
		this.contentBox.css("height", this.divList["donateInfo"].height());
		console.log(this.contentBox.css("height"));
	}
}