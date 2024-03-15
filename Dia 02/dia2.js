// finalizamos as atividades do dia 02 e vamos começar a descriptografar
let M = [[1,2],[3,4]]
const letraA = ['a',0,0];
const b = ['b',1,0];
const c = ['c',2,0];
const d = ['d',3,0];
const e = ['e',4,0];

const f = ['f',0,1];
const g = ['g',1,2];
const h = ['h',2,1];
const letraI = ['i',3,1];
const j = ['j',4,1];

const k = ['k',0,2];
const l = ['l',1,2];
const m = ['m',2,2];
const n = ['n',3,2];
const o = ['o',4,2];

const p = ['p',0,3];
const q = ['q',1,3];
const r = ['r',2,3];
const s = ['s',3,3];
const t = ['t',4,3];

const u = ['u',0,4];
const v = ['v',1,4];
const w = ['w',2,4];
const x = ['x',3,4];
const y = ['y',4,4];

const z = ['z',0,5];
const espaço = [1,5];
const pFinal = [2,5];
const virgula = [3,5];
const interroga = [4,5];
const alfabeto = [letraA,b,c,d,e,f,g,h,letraI,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
function determinante(A){
    det = A[0][0]*A[1][1] - (A[1][0]*A[0][1])
    if (det == 0){

        alert(`Você não pode prosseguir, pois o determinante de ${A} é 0`)
    }    
    if (det !== 0){
        prompt(`Digite então sua mensagem`)
    }
}

let mensagem = prompt('Digite uma mensagem')    
/* function devolveNumeros(a){
   
}

devolveNumeros(mensagem )
*/
function criptografa(b){
    
    for (let j = 0; j < b.length;j++){
        for (let i = 0; i < alfabeto.length; i++){
            if (alfabeto[i][0] == b[j] ){
            const a = [alfabeto[i][1],alfabeto[i][2]];
            const result = [M[0][0]*a[0]+M[0][1]*a[1],  M[1][0] * a[0] + M[1][1]*a[1]  ]
            document.body.innerHTML += ` ${result} <br />    `
            }
        }
    }
   

}
criptografa(mensagem)

// * -> MULTIPLICAÇÃO
// / -> DIVISÃO
// ** -> POTÊNCIA