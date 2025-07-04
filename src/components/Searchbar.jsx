import React from "react";
import { FaSearch } from 'react-icons/fa'; 
import styles from "../styles/Searchbar.module.css"

class Searchbar extends React.Component {
   state = {
    value: ''
   } 


   handleChange = e => {
    this.setState({value: e.target.value})
   }

   handleSubmit = e => {
    e.preventDefault()

    this.props.onSubmit(this.state.value)
    this.setState({value: ''})
   }
 

  render() {
    return (
        <header className={styles.Searchbar}>
  <form className={styles.SearchForm}  onSubmit={this.handleSubmit}>
    <button type="submit" className={styles.SearchFormButton}>
      <FaSearch className={styles.SearchIcon} />
      <span className={styles.SearchFormButtonLabel}>Search</span>
    </button>
    <input
      className={styles.SearchFormInput}
      type="text"
autoComplete="off"
            autoFocus
      placeholder="Search images and photos"
      value={this.state.value}
            onChange={this.handleChange}
    />
  </form>
</header>
    )
  }
}


export default Searchbar