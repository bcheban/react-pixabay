import React from 'react';
import styles from '../styles/Button.module.css'

 class Button extends React.Component {


    
    render() {
        const { onClick } = this.props
        return (
            <div >
                <button onClick={onClick} className={styles.Button} type="button">Load more</button>
            </div>
        );
    }
}


export default Button