# Bootcamp React - TPM1 - Trabalho Prático do Módulo 2 JS Avançado

Trabalho prático do módulo 2 do bootcamp react, Pós-graduação em Desenvolvimento Full Stack - XP Educação

Construa, utilizando o React, uma aplicação para informar a evolução de
rendimentos de fundos.

## Atividades

- [✔] Implementar, utilizando o React, uma aplicação denominada "reactinvestments" que mostrará o rendimento de sete fundos durante
determinado ano. Os dados sobre os fundos serão fornecidos pelo
professor no Fórum de Avisos do Módulo.;

- [✔] Descrevo abaixo alguns detalhes importantes sobre o primeiro fundo da
lista – "Fundo de Ações" – que podem servir de base para vocês na
implementação:
− O rendimento total foi R$ 614,54 (+61,45%) porque é a diferença
entre R$ 1.614,54 (valor de dez/2020) e R$ 1.000 (valor de jan/2020).
− Em jun/2020 é possível afirmar que o fundo teve um prejuízo de 11%
em relação a mai/2020, pois passou de R$ 1.133,79 para R$ 1.187,08.
− Em jul/2020 é possível afirmar que o fundo rendeu 10% em relação a
jun/2020, pois passou de R$ 1.187,08 para R$ 1.305,78.

- [✔] Estrutura dos dados – será fornecido, no Fórum de Avisos do Professor,
o arquivo investments.json, que contém:
− Um array denominado investments, com id e description.
− Um array denominado reports, com id, investmentId, month, year e
value. Existem exatamente 12 itens de reports para cada item de
investments. É responsabilidade de vocês identificar este vínculo.

- [✔] Vocês deverão transformar esse conteúdo, que está no formato JSON, em
variáveis em memória, que deverão ser lidas pelo componente React que
realizará a renderização dos dados. Se preferirem, podem montar um Back
End com a biblioteca json-server, mas isso não será cobrado neste
Trabalho Prático.

- [✔] Além disso, é responsabilidade de vocês calcular, com base nos dados
divulgados, o percentual de rendimento/prejuízo total (entre janeiro e
dezembro) e o percentual de rendimento/prejuízo a cada mês.