import React from 'react';
import PropTypes from 'prop-types'
import Modal from "./Modal/index";

class ModalMain extends React.Component {
	static propTypes = {
		modal: PropTypes.bool,
		showModal: PropTypes.func,
		closeModal: PropTypes.func,
	};
	static defaultProps = {
		modal: false,
	};

	constructor(props) {
		super(props);

		this.state = { modal: false }
	}

	showModal() {
		this.setState({ modal: true });
	}

	closeModal() {
		this.setState({ modal: false });
	}
	render() {
		return (
			<div>
				<button
					onClick={this.showModal.bind(this)}
					type='button'
					className='btn btn-primary'>
					Show
				</button>
				<Modal isShown={this.state.modal} onClose={this.closeModal.bind(this)} />
			</div>
				)
	}
}

export default ModalMain