import { h } from 'preact'
import style from './style.css'

import datas from '../../data/data'

const Card = () => {
  return (
    <main class={`grid-container fluid `}>
      <div class={`grid-x grid-margin-x ${style.container}`}>
        {datas.map((data) => {
          return (
            <div class={`cell small-3 ${style.card}`}>
              <div class={`card card-section ${style.card__img}`}>
                <img src={data.img} alt={data.title} />
                <span class={`label ${style.label}`}>{data.category}</span>
                <div class={`${style.info}`}>
                  <h4 class={`${style.title}`}> {data.title}</h4>
                  <p class={`${style.author}`}>{data.author}</p>
                </div>
                <button class={` button ${style.button}`}>
                  Download
                  <a
                    href={data.linkDl}
                    target='_blank'
                    rel='noreferrer'
                    download
                  />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Card
