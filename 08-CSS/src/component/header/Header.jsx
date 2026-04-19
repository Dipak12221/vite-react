import style from '../header/Header.module.css'

const header = () => {
  return (
    <div className={style.header}>
      <h3>Dev.Dipak</h3>
      <button className={style.btn}>Sign Up</button>
    </div>
  )
}

export default header
