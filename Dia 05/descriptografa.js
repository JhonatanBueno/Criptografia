const inversa = [[-2,1],[3/2,-(1/2)]]
const letraA = ['a',0,0];
const b = ['b',1,0];
const c = ['c',2,0];
const d = ['d',3,0];
const e = ['e',4,0];

const f = ['f',0,1];
const g = ['g',1,1];
const h = ['h',2,1];
const letraI = ['i',3,1];
const letraJ = ['j',4,1];

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
const alfabeto = [letraA,b,c,d,e,f,g,h,letraI,letraJ,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
const numeros = prompt("Digite somente os números, separados por vírgula referentes a sua mensagem");
const somenteNumeros = numeros.split(',');
console.log(somenteNumeros);

for (let j = 0 ; j < somenteNumeros.length ; j++){
for (let i = 0; i < alfabeto.length ; i++){
    const produto = [somenteNumeros[j]*inversa[0][0] + somenteNumeros[j+1]*inversa[1][0],somenteNumeros[j]*
inversa[0][1]+somenteNumeros[j+1]*inversa[1][1]];
        if (produto[0] == alfabeto[i][1] & produto[1] == alfabeto[i][2]){
            console.log(produto)
           document.getElementById('mexe').innerHTML += `Sua letra é <b> ${alfabeto[i][0]}</b> <br />` 
    }


}
j+=1;
}