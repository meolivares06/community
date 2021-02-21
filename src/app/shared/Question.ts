export interface Question {
  id?: number;
  title: string;
  category: string;
  comments_qt: number;
  username: string;
  pinned: boolean;
  grade: string;
  description: string;
  vote_up: number;
  vote_down: number;

}

// export const Questions_List: Question[] = [
//   {
//     title: '¿Cuáles son los múltiplos del 7?',
//     description: 'La verdad no me queda muy claro cuáles son los múltiplos del 7 porque en la última clase e... ',
//     category: 'Matemáticas',
//     comments_qt: 72,
//     grade: '6',
//     username: 'juan.c23',
//     vote_up: 72,
//     vote_down: 2,
//     pinned: true
//   },
//   {
//     title: '¿Qué es el quíntuple de un número?',
//     description: 'Es la primera vez que escucho la palabra... me gustaría que alguien me explicara mejor lo qu...',
//     category: 'Matemáticas',
//     comments_qt: 153,
//     grade: '6',
//     username: 'juliaaraujo',
//     vote_up: 153,
//     vote_down: 20,
//     pinned: false
//   },
//   {
//     title: '¿Cuál es el Mínimo Común Múltiplo (mcm) entre 8 y 12?',
//     description: 'Creo que lo había entendido de otra manera...',
//     category: 'Matemáticas',
//     comments_qt: 221,
//     grade: '6',
//     username: 'juliaaraujo',
//     vote_up: 221,
//     vote_down: 40,
//     pinned: false
//   },
//   {
//     title: '¿Cuáles son los múltiplos del 7?',
//     description: 'No me queda claro cuáles son los primos',
//     category: 'Matemáticas',
//     comments_qt: 172,
//     grade: '6',
//     username: 'juan.c23',
//     vote_up: 172,
//     vote_down: 30,
//     pinned: true
//   }
// ]
