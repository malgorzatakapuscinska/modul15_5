Search = React.createClass({
	
	/* 1. set initial state*/
	
    getInitialState(){
        return {
          searchingText: ''  
        };
    },
    
    /* 2 handleChange method  */
    
    handleChange: function(event) {
    
   		 /* A. create variable and assign input text to variable*/
     
        var searchingText = event.target.value;  
        
   		 /* B. assign a value of searchingText variable to searchingText state */
    
        this.setState({							
            searchingText: searchingText
        });
        
    	/* C. runnung handleSearch method with parameter searchingText  */
    	
        if (searchingText.length>2){
            this.props.onSearch(searchingText);  
        }
    },
    
  /* 3. handleKeyUp method - assigns new value to searchingText  state  and runs handleSearch function then Enter is released*/
  
  		/* this.props.onSearch(this.state.searchingText) - runs handleSearch with searchingtext prameter equal input text */
  		
  		
    handleKeyUp: function(event){
        if(event.keyCode === 13){
            this.props.onSearch(this.state.searchingText);}
    },
    
  /*4. Render method  */
  
	  /* onChange={this.handleChange} means "on onChange (input React event) run hendleChange method"*/
	  /* onKeyUp={this.handleKeyUp} means "onkeyUp event (keyboard React event) run handleKeyUp method */
  
    render: function (){
       var styles: {
           fontSize: '1,5em ',
           width: '90%',
           maxWidth: '350px'
       };
       
       return (
          <input 
          type='text'
          onChange={this.handleChange}  
          onKeyUp={this.handleKeyUp} 	
          placeholder='Tutaj wpisz wyszukiwaną frazę'
          style={styles}
          value={this.state.searchTerm} 
          />
       ); 
   } 
});