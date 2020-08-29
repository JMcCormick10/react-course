import React, {Component} from "react";
import Person from "./Person/Person";

class  Persons extends Component {
    // static getDerivedStateFromzProps(props, state){
    //     console.log('Persons js get derived state from props');
    //     return state;
    // }

    // componentWillReceiveProps(props){
    //     console.log('Persons.js component will receive props', props);
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('Persons js should component update');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Persons js get snapshot before update');
        return {message: "Snapshot"};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('Persons js component did update');
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('persons js component will umount');
    }

    render(){
        console.log('[Persons.js] rendering');
        return this.props.persons.map((person, index) => {
            return (
              <Person 
              click={() => this.props.clicked(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={event => this.props.changed(event, person.id)}
              />
            )
        });        
    }
}


    export default Persons;
