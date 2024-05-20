<template>
    <header class="banner">
        <div class="apresentacao">
            <img src="../assets/images/logo.svg" alt="logo do cookin'up">

            <p class="cabecalho-lg frase-cabecalho">
                <span class="texto-verde">Um banquete de ideias para</span>
                despertar o chef que há em você!
            </p>

            <p class="subtitulo-lg">Exploque novas receitas todos os dias com os ingredientes
                que estão ao seu alcance!
            </p>
        </div>
        <img src="../assets/images/foto-banner.png" alt="" class="foto-banner">
    </header>
</template>

<style scoped>

/* novidade no HTML5 que nos permite inserir estilos CSS que sejam apenas aplicado
em um determinado lugar de uma página, de modo que os estilos restantes da mesma
página não sejam afetados. Para isso, foi definido um novo atributo SCOPED que deve
ser utilizado na tag. */
.banner {
    padding: 4rem 7.5rem;
    color: var(--creme);

    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 3.25rem;
}

.logo {
    height: 4.5rem;
    margin-bottom: 3rem;
}

.frase-cabecalho {
    margin-bottom: 2rem;
}

.texto-verde {
    color: var(--verde-medio, #3D6D4A);
}

.foto-banner {
    width: 35rem;
}

@media only screen and (max-width: 1300px) {
    .banner {
        padding: 4rem 3.75rem;
        flex-direction: columns;
        align-items: center;
        gap: 1rem;
    }

    .logo {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
}

@media only screen and (max-width: 767px) {
    .banner {
        padding: 4rem 1.5rem;
    }

    .foto-banner {
        width: min(100%, 21.25rem);
    }
}
</style>