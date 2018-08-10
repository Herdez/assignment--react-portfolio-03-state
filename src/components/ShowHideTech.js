import React, { Component } from 'react';


/*  Note:
   if you find a add/remove 'techlist--hidden' from the div element's class,
   the techlist box will appear/disappear
 
*/

class ShowHideTech extends Component {
  constructor() {
    super();

    this.state = {
      checked: false,
      show: `techlist--hidden`
    };
  }

  showTech = (e) => {
    e.preventDefault();
    if (this.state.checked === false) {
          this.setState({
            show: `techlist`,
            checked: true
          })
    } else {
          this.setState({
            show: `techlist--hidden`,
            checked: false
          })
    }

  }

  render() {

    let techlistStatus = this.state.show

    return (
      <section>
        <h4>Technologies</h4>
        <button className="toggle-techlist" onClick={ this.showTech }>{ (this.state.checked === true) ? '- Hide Tech' : '+ Show Tech' }</button>

        <div className={`techlist ${techlistStatus}`}>
          <span className="techlist__icon devicons devicons-github_badge"/>
          <span className="techlist__icon devicons devicons-git"/>
          <span className="techlist__icon devicons devicons-html5"/>
          <span className="techlist__icon devicons devicons devicons-css3"/>
          <span className="techlist__icon devicons devicons-sass"/>
          <span className="techlist__icon devicons devicons-linux"/>
          <span className="techlist__icon devicons devicons devicons-nodejs"/>
          <span className="techlist__icon devicons devicons devicons-react"/>
          <span className="techlist__icon devicons devicons devicons-illustrator"/>
        </div>
      </section>
    );
  }
}

export default ShowHideTech;
