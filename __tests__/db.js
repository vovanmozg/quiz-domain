class Db { 
	get(key) {
		return   {
						    "question": "What right ways to disable forgery protection for specific action?",
						    "type": "ma",
						    "choices": {
						      "1": "protect_from_forgery except: :index",
						      "2": "skip_before_action :verify_authenticity_token, only: :index",
						      "3": "disable_protect_from_forgery only: :index",
						      "4": "skip_before_action :verify_authenticity_token, except: :index"
						    },
						    "answer": ["1", "2"],
						    "tags": [
						      "rails5", "advanced-level"
						    ],
						    "explanation": "https://edgeapi.rubyonrails.org/classes/ActionController/RequestForgeryProtection.html"
						  }

	}
	set(key, value) {
		return value;
	}
}

exports.Db = Db