import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { CheckRounded, CloseOutlined } from '@material-ui/icons'

const DataRow = ({ heading=false, id, imageUrl, name, stata, statb, statc }) => {
    return (
        <Link href={heading ? '/' : `/${id}`}>
            <div className={heading ? styles.datarow__heading : styles.datarow__data}>
                <span className={styles.image}>
                    {heading ? null : <img src={imageUrl}></img>}
                </span>
                <span className={styles.name}>{name}</span>
                <span className={styles.stata}>{stata || '-'}</span>
                <span className={styles.statb}>{statb}</span>
                <span className={styles.statc}>{!heading && statc ? <CheckRounded /> : !heading ? <CloseOutlined /> : statc  }</span>
            </div>
        </Link>
    )
}

export default DataRow