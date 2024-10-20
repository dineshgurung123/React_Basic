import './Test.css'

function Test(props) {
    
   return <>
    
    <div class="card-container">
            <div class="card">
                <img src="https://via.placeholder.com/150" alt="Card image"/>
                <h2>{props.name}</h2>
                <p>{props.about}</p>
                <button>Read More</button>
            </div>
    
        
        </div>
    
    
    
    </>
    
    
        
    }
    
    export default Test;