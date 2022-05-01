let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A



// [varA,varB,varC] = [varB,varC,varA]
const VarTempA = varA
varA = varB
varB = varC
varC = VarTempA

console.log(varA, varB,varC)

