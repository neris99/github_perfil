import { useEffect, useState } from "react";
import styles from './ReposList.module.css'

const RepoList = ({ nomeUsuario }) =>{
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true)

    useEffect(()=>{
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson =>{
            setRepos(resJson)
        })
    }, [nomeUsuario])

    return(
        <div className="container">
            <ul className={styles.list}>
            {/* {repos.map(repositorio =>(       abaixo sera de uma forma mais compacta*/}
            {repos.map(({id, name, language, html_url}) =>(
                <li key={id} className={styles.listItem}>
                    <div className={styles.itemName}>
                        <b>Nome:</b> 
                        {name}<br/>
                    </div>
                    <div className={styles.listlanguage}>
                    <b>Linguagem:</b> 
                    {language}<br/>
                    </div>
                    <a target="_blank" href={html_url} className={styles.itemLink}>Visitar no GitHub</a>
                </li>
            ))}
            <li>Repositorio</li>
            </ul>
        </div>
    )
}

export default RepoList;