import React, {useEffect} from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {

    useEffect(() => {
        console.log('cockpit.js use effect');
        const timer = setTimeout(function(){
            alert('saved data to cloud');
        }, 1000)
        return () => {
            // clearTimeout(timer);
            console.log('cockpit js cleanup');
        };
    }, []);

    useEffect(() => {
        console.log('cockput js 2nd use effect');
        return () =>{
          console.log('cockput js cleanup work in second use effect');  
        }
    })

    const assignedClasses = [];

    let btnClass = '';
    if (props.showPersons){
        btnClass = classes.Red;
    }

    if (props.persons.length <=2 ){
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <=1 ){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button className={btnClass}
            
            onClick={props.clicked}>Toggle Person
            </button>
        </div>
    );
}

export default cockpit;