function organizar(){ 
  const num1 = document.getElementById("valor_1").value;

  const num2 = document.getElementById("valor_2").value;

  const num3 = document.getElementById("valor_3").value;

  let maior, menor, meio;

  if (num1 > num2 && num1 >num3)
  {
    maior = num1
    if (num2 < num3)
    {
      menor = num2
      meio = num3
    }
    else
    {
      menor = num3
      meio = num2
    }
  }
  else if (num1 < num2 && num1 < num3)
  {
    menor = num1
    if (num2 > num3)
    {
      maior = num2
      meio = num3
    }
    else
    {
      maior = num3
      meio = num2
    } 
  }else
  {
    meio = num1
    if (num2 > num3)
    {
      maior = num2
      menor = num3
    }
    else
    {
      maior = num3
      menor = num2
    } 
  }

  final = menor +", "+ meio +", "+ maior;


 document.getElementById("resultado").innerHTML = final;

}

function salvar(){
let blob = new Blob([final],
  {
    type: "text/plain;charset=utf-8"
  });

saveAs(blob, "ordenado" + '.txt');
}