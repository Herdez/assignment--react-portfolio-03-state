import React from 'react';


class Project extends React.Component {
	render(){
		console.log(this.props);
		return (
            <div className={ (this.props.solo === true) ? 'project project--solo' : 'project project--team'}>
              <span className="project__title">{ this.props.name }</span>
            </div>
		);
	}
}

export default Project;