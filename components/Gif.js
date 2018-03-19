var GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif'; 
var styles = {
	minHeight: '310px',
	margin: '0.5em'
};

Gif = React.createClass({

//1.  getUrl method - returns  url received by props from App component */

	getUrl: function(){
		return this.props.sourceUrl || GIPHY_LOADING_URL;
	},
	
//2. render method
	
	render: function(){
	
	/* In depeends on value of loading state returns Gif element containing gif from giphy.com (then loading is false) or loading gif (then loading is true)   */
	
		var url = this.props.loading ? GIPHY_LOADING_URL : this.props.url; 
		
		return (
			<div style={styles}>
				<a href={this.getUrl()} title='view this on giphy' target='new'>
		          <img id='gif' src={url} style={{width: '100%', maxWidth: '350px'}}/>
		        </a>
			</div>
		);
	}
});
