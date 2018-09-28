import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Modal = (props) => {
  const popUp = props.isShown ? { display: 'block' } : null;

  return (
		<section id='modal' className='modal fade show' style={popUp}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<header className='modal-header'>
						<h5 className='modal-title'>Title</h5>
					</header>
					<article className='modal-body'>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
					</article>
					<div className="modal-footer">
						<button
							onClick={props.onClose}
							type='button'
							className='btn btn-danger'>
							Close
						</button>
					</div>
				</div>
			</div>
		</section>
  );
};
export default Modal;
