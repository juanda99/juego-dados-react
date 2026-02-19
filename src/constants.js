// 1. opción: exportar cada constante con "export const"
export const WINNER_SCORE = 20
export const WINNER_MESSAGE = '🎉 Player wins!🎉'

// OTRO FICHERO los importamos con:
// import { WINNER_SCORE, WINNER_MESSAGE } from './constants'
// podemos importarlos con otro nombre:
// import { WINNER_SCORE as SCORE_TO_WIN } from './constants'

// si hay algún export default, lo importamos sin llaves y con el nombre que queramos:
// export default WINNER_SCORE = 20
// export const WINNER_MESSAGE =  '🎉 Player wins!🎉'

// en el otro fichero:
// import SCORE_TO_WIN from './constants'
// import { WINNER_MESSAGE } from './constants'
// o importamos los dos a la vez:
// import SCORE_TO_WIN, { WINNER_MESSAGE } from './constants'
