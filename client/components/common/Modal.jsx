var React = require('react');
var { Component } = require('react');
var propTypes = require('prop-types');
var styles = require('../../styles/popup.css');

class Modal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showModal: true
		}
	}

	static get propTypes (){
		return {
			message:propTypes.string.isRequired
		}
	}

	hideModal() {
		this.setState({ showModal: false });
	}

	render() {
		var { showModal } = this.state;
		if (showModal) {
			return (<div className={styles['popup-container']} onClick={() => this.hideModal()}>
				<div className={styles.modal}>{this.props.message || 'Something went wrong!!!'}</div>
			</div>
			)
		}
		return null
	}
}


module.exports = Modal;