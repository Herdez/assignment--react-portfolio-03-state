import React, { Component } from 'react';
import { projectData } from '../data/datasource';
import Project from './Project';


/*  Advice:
   (1) Create the component's JSX by using .map() on `projectData`

       <div className="project project--«...PROJECT-TYPE...»">
         <span className="project__title">«...PROJECT-NAME...»</span>
       </div>

       -- substitute values for PROJECT-TYPE and PROJECT-NAME


   (2) add an onClick event listener to the  <span> elements in .project-types-list
        that calls a method to change the FilterProjects component state

        Hint: you will want to set the component's initial state in the
              constructor() function

   (3) Use .filter() in the render() method `projectData` based on FilterProjects
       component state

       Hint: you may want to use .filter() then .map()
 */

class FilterProjects extends Component {
  constructor(){
    super();

    this.state = {
      projectType: 'all'
    };
  }

  changeFilter = (e) => {
    e.preventDefault();
    let type = e.target.dataset.ptype;
    this.setState({
      projectType: type
    })
  }

  render() {
    let typeOfProject = this.state.projectType
    let projects = projectData.filter( function (project) {
        if (typeOfProject === 'all') {
          return project
        } else if (typeOfProject === 'solo') {
          return project.solo === true
        } else {
          return project.solo === false
        }
    });

    return (
      <section>
          <h4>Projects</h4>

          <div className="project-types-list">
            <span data-ptype="all" className={ (this.state.projectType === "all") ? 'project-type project-type--all project-type--selected' : 'project-type project-type--all' } onClick={ this.changeFilter }>
              All
            </span>

            <span data-ptype="solo" className={ (this.state.projectType === "solo") ? 'project-type project-type--solo project-type--selected' : 'project-type project-type--solo' } onClick={ this.changeFilter }>
              <i className="ion-person"></i>Solo
            </span>

            <span data-ptype="team" className={ (this.state.projectType === "team") ? 'project-type project-type--team project-type--selected' : 'project-type project-type--team' } onClick={ this.changeFilter }>
              <i className="ion-person-stalker"></i>Team
            </span>
          </div>

          <div className='projects-list'>
            {/* Step (1) --- .map() the projectData to JSX  */}
            { projects.map(function(project){
                return <Project name={ project.projectName } solo={ project.solo } />
            })}
          </div>
        </section>

    );
  }
}

export default FilterProjects;
