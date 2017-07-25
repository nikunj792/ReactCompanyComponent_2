var React = require('react');
var ReactDOM = require('react-dom');

var ContentMessage =React.createClass({
	render :function(){
		var companyName =this.props.company;
		var authorName =this.props.author;
		return (
		<div>
				<h1>Hello Advance React</h1>
				<p>Company Name is {companyName}</p>
				<p>Author is {authorName}</p> 
		</div>
		);
	}
});

var ContentForm =React.createClass({
		onFormSubmit:function(e){
		e.preventDefault();
		var formValue ={}
		var companyName =this.refs.company.value;
		var authorName =this.refs.author.value;
		if(typeof companyName ==='string' && typeof authorName ==='string' && companyName.length >3 && authorName.length>3)
			{
				this.refs.company.value='';
				this.refs.author.value='';
				formValue.company =companyName;
				formValue.author=authorName;
				this.props.onNewValue(formValue);
			}
		else
			{
				alert("Some Error in Typing");
			}
	},
	render: function(){
		return (
				<form onSubmit={this.onFormSubmit}>
					<div><label for="company">Company Name :</label></div>
					<div><input type="text" ref="company" placeholder="Company Name"/></div>
					<div><input type="text" ref="author" placeholder="Author Name"/></div>
					<div><button>Submit Company Name</button></div>
				</form>
		);
	}
});

var Content = React.createClass({
	getDefaultProps:function(){
		return {
			company:"Wipro Technologies",
			author:"Nikunj Agarwal"
			}
	},
	getInitialState: function(){
		return {
			company:this.props.company,
			author:this.props.author
		};
	},
	submitNewForm:function(formValue){
		this.setState(formValue);
	},
	render:function(){
		var companyName =this.state.company;
		var authorName =this.state.author;
		return (
			<div>
				<ContentMessage company={companyName} author={authorName}/>
				<ContentForm onNewValue={this.submitNewForm}/>
			</div>
		);
	}
});
var name = "Wipro Technologies,Pritech";
var authorName = "Nikunj";
ReactDOM.render(
<Content company={name} author={authorName}/>,
  document.getElementById('reactAdvance')
);