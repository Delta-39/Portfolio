import styles from "./Contact.module.css"

const Contact = () =>{
    return(
        <div className={styles.container} id="contact" >
            <h2>Contact Me!</h2>
            <div>
                <form action="">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" />
                    </div>
                    
                </form>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Contact