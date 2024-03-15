let matriz = prompt('Digite uma matriz 2x2');
let texto = prompt('Digite sua mensagem');
let A = [[0,0],[0,0]];
A[0][0] = matriz[2];
A[0][1] = matriz[4];
A[1][0] = matriz[8];
A[1][1] = matriz[10] 

document.body.innerHTML += `${A} <br />`; //ARRUMAR

document.body.innerHTML += texto;

A=[[1,2],[3,4]]
console.log(A);

function calculaDeterminante(A){
    let det;
    if (A.length == 1){
        det = A[0];
    
    }

    if (A.length == 2){
        det = A[0][0]*A[1][1] - (A[0][1]*A[1][0])
        
    
    }
    document.body.innerHTML += det
}


calculaDeterminante(A);