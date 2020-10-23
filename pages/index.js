import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import { Element, scroller } from 'react-scroll';
/* import Swal from 'sweetalert2' */

const setupScroll = {
    duration: 3000,
    delay: 50,
    smooth: true, // linear “easeInQuint” “easeOutCubic”,
    offset: -10
}

const Home = () => {

    const [matriz, setMatriz] = useState([
        /* [12, 13, 19, 26, 28, 15, 16, 26, 10, 14],
        [11, 29, 16, 31, 18, 22, 30, 30, 12, 22],
        [22, 11, 16, 21, 23, 31, 18, 30, 27, 19],
        [22, 13, 11, 24, 17, 28, 26, 13, 22, 28],
        [29, 17, 20, 18, 19, 25, 15, 31, 20, 27],
        [31, 30, 11, 30, 15, 19, 10, 18, 11, 25],
        [15, 27, 22, 14, 12, 25, 28, 24, 17, 14],
        [12, 13, 24, 23, 12, 28, 12, 17, 22, 18],
        [22, 15, 27, 24, 23, 23, 27, 20, 27, 13],
        [25, 29, 15, 31, 19, 31, 14, 23, 14, 28], */
        [6	,6	,6	,4	,15	,140	,135	,140	,136	,140],
        [10	,6	,11	,5	,4	,134	,138	,136	,136	,137],
        [12	,11	,15	,10	,4	,141	,135	,139	,141	,134],
        [7	,4	,7	,8	,13	,140	,140	,135	,137	,134],
        [7	,14	,11	,9	,9	,138	,136	,137	,132	,140],
        [11	,9	,4	,7	,12	,136	,140	,135	,132	,136],
        [15	,13	,15	,11	,9	,141	,141	,141	,133	,141],
        [8	,10	,12	,7	,7	,137	,137	,133	,141	,141],
        [15	,14	,13	,14	,14	,133	,140	,137	,132	,140],
        [11	,10	,9	,5	,11	,140	,138	,139	,133	,140],
    ]);
    
    const [data, setData] = useState([]);
    const [largo, setLargo] = useState(0);
    const [secuencia, setSecuencia] = useState([]);
    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(false);
    const [masGrande, setMasGrande] = useState(0);
    const [numBits, setnumBits] = useState(0);
    const [tramas, setTramas] = useState([]);

    /* useEffect(() => {
        scroller.scrollTo("info", setupScroll)
    }, [compresion])
 */
    useEffect(() => {
        setLargo(matriz[0].length)
    }, []);

    const zigZag = () => {

        let cont = 0

        let x = 0
        let y = 0

        let lateral = false
        let vertical = false

        let mitad = false

        let secuencia = []

        while (cont < largo * largo) {

            if (!(vertical && y === 0) && !(vertical && x === largo - 1)) {
                secuencia.push(matriz[y][x])
            }

            if (y === largo - 1) {
                mitad = true
            }

            if (mitad) {
                if (vertical) {
                    if (x === largo - 1) {
                        vertical = false
                        lateral = false
                        cont--
                    } else {
                        y--
                        x++
                    }
                } else {
                    if (lateral) {
                        if (y === largo - 1) {
                            x++
                            vertical = true
                        } else {
                            y++
                            x--
                        }
                    } else {
                        if (x === largo - 1) {
                            y++
                            lateral = true
                        }

                    }
                }
            } else {
                if (vertical) {
                    if (y === 0) {
                        vertical = false
                        lateral = false
                        cont--
                    } else {
                        y--
                        x++
                    }
                } else {
                    if (lateral) {
                        if (x === 0) {
                            y++
                            vertical = true
                        } else {
                            y++
                            x--
                        }
                    } else {
                        if (y === 0) {
                            x++
                            lateral = true
                        }

                    }
                }
            }

            cont++
        }

        const secondMatriz = createSecondMatriz(secuencia)
        setSecuencia(secondMatriz)
        
        cont = 0

        x = 0
        y = 0

        lateral = false
        vertical = false

        mitad = false

        let secundary = []


        for (let i = 0; i < largo; i++) {
            secundary[i] = new Array(largo)
        }

        while (cont < largo * largo) {

            if (!(vertical && y === 0) && !(vertical && x === largo - 1)) {
                secundary[y][x] = secondMatriz[cont]
            }

            if (y === largo - 1) {
                mitad = true
            }

            if (mitad) {
                if (vertical) {
                    if (x === largo - 1) {
                        vertical = false
                        lateral = false
                        cont--
                    } else {
                        y--
                        x++
                    }
                } else {
                    if (lateral) {
                        if (y === largo - 1) {
                            x++
                            vertical = true
                        } else {
                            y++
                            x--
                        }
                    } else {
                        if (x === largo - 1) {
                            y++
                            lateral = true
                        }

                    }
                }
            } else {
                if (vertical) {
                    if (y === 0) {
                        vertical = false
                        lateral = false
                        cont--
                    } else {
                        y--
                        x++
                    }
                } else {
                    if (lateral) {
                        if (x === 0) {
                            y++
                            vertical = true
                        } else {
                            y++
                            x--
                        }
                    } else {
                        if (y === 0) {
                            x++
                            lateral = true
                        }

                    }
                }
            }

            cont++
        }

        setData(secundary)
        setActive(true)
    }

    const lateral = () => {

        let secuencia = []

        for (let y = 0; y < largo; y++) {
            for (let x = 0; x < largo; x++) {
                secuencia.push(matriz[y][x])
            }
        }

        const secondMatriz = createSecondMatriz(secuencia)
        setSecuencia(secondMatriz)
        let secundary = []

        for (let i = 0; i < matriz[0].length; i++) {
            secundary[i] = new Array(matriz[0].length)
        }

        let cont = 0

        for (let y = 0; y < largo; y++) {
            for (let x = 0; x < largo; x++) {
                secundary[y][x] = secondMatriz[cont]
                cont++
            }
        }
        setData(secundary)
        setActive(true)
    }

    const vertical = () => {

        let secuencia = []

        for (let y = 0; y < largo; y++) {
            for (let x = 0; x < largo; x++) {
                secuencia.push(matriz[x][y])
            }
        }

        const secondMatriz = createSecondMatriz(secuencia)
        setSecuencia(secondMatriz)
        let secundary = []

        for (let i = 0; i < matriz[0].length; i++) {
            secundary[i] = new Array(matriz[0].length)
        }

        let cont = 0

        for (let y = 0; y < largo; y++) {
            for (let x = 0; x < largo; x++) {
                secundary[x][y] = secondMatriz[cont]
                cont++
            }
        }

        setData(secundary)
        setActive(true)
    }

    const createSecondMatriz = (Mleida) => {

        let Msecundaria = []

        for (let i = 0; i < Mleida.length; i++) {
            if (i === 0) {
                Msecundaria[i] = Mleida[i]
            } else {
                Msecundaria[i] = Mleida[i] - Mleida[i - 1]
            }
        }

        return Msecundaria

    }


    const codificar = () => {

        setActive2(true)

        let MatrizPositiva = []

        for (let i = 0; i < matriz[0].length; i++) {
            MatrizPositiva[i] = new Array(matriz[0].length)
        }

        for (let i = 0; i < largo; i++) {
            for (let j = 0; j < largo; j++) {
                MatrizPositiva[i][j] = data[i][j]
            }
        }

        for (let i = 0; i < largo; i++) {
            for (let j = 0; j < largo; j++) {
                MatrizPositiva[i][j] = Math.abs(MatrizPositiva[i][j]) 
            }
        }

        let mayor = 0

        for (let i = 0; i < largo; i++) {
            for (let j = 0; j < largo; j++) {
                if (MatrizPositiva[i][j] >= mayor) {
                    mayor = MatrizPositiva[i][j]
                }
            }
        }

        console.log('el número mayor es: ' + mayor)

        setMasGrande(mayor)

        let binario = ''

        while (mayor > 0) {
            if (mayor % 2 == 0) {
                binario += 0
            } else {
                binario += 1
            }
            mayor = Math.floor(mayor / 2)
        }

        console.log('en binario es: ' + binario + ', tiene ' + binario.length + ' bits')
        
        setnumBits(binario.length)

        console.log(secuencia)

        let tramaConSignos = []

        for (let i = 0; i < secuencia.length; i++) {

            let numero = Math.abs(secuencia[i])
            let numeroBinario = ''

            while (numero > 0) {
                if (numero % 2 == 0) {
                    numeroBinario += 0
                } else {
                    numeroBinario += 1
                }
                numero = Math.floor(numero / 2)
            }
            while (numeroBinario.length < binario.length) {
                numeroBinario += '0'
            }

            if (secuencia[i] >= 0) {
                tramaConSignos.push({
                    signo: 0+'',
                    trama: numeroBinario.split('').reverse().join('')
                })
            } else {
                tramaConSignos.push({
                    signo: 1+'',
                    trama: numeroBinario.split('').reverse().join('')
                })
            }
        }

        setTramas(tramaConSignos)
        
    }


    return (
        <div className="container">

            <Head>
                <title>Codificación DCPM</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>CODIFICACIÓN DCPM</h1>

            <div className="content">

                <main>
                    <div>
                        <p style={{fontWeight: 700}}>Matriz</p>
                        <div className="matriz">
                            {
                                matriz.map(m => (
                                    <>
                                        {
                                            m.map(ma => (
                                                <span>{ma}</span>
                                            ))
                                        }
                                    </>
                                ))
                            }
                        </div>
                        <div>
                            <p style={{ fontWeight: 700 }}>Forma de lectura</p>
                            <button onClick={zigZag}>Zig - Zag</button>
                            <button onClick={lateral}>Horizontal</button>
                            <button onClick={vertical}>Vertical</button>
                        </div>

                    </div>
                    
                </main>

                {
                    active
                    ?
                    <main>
                        <div>
                            <div style={{ display: 'grid' }}>
                                <p style={{ fontWeight: 700 }}>Matriz Secundaria</p>
                                <div className="matriz">
                                    {
                                        data.map(m => (
                                            <>
                                                {
                                                    m.map(ma => (
                                                        <span>{ma}</span>
                                                    ))
                                                }
                                            </>
                                        ))
                                    }
                                </div>
                                <p style={{ fontWeight: 700, color: '#ffffff00' }}>.</p>
                                <button onClick={codificar}>Codificar</button>
                            </div>
                        </div>
                    </main>
                    :
                    ''
                }

                {
                    active2
                    ?
                    <>
                    <main style={{gridColumn: '1/3'}} name="info">
                        <div style={{ textAlign: 'center' }}>
                            <p>Número más grande: {masGrande} -> {numBits} bits</p>
                            <p>Tamaño de las tramas: {numBits + 1} bits</p>
                        </div>
                    </main>

                    <main style={{ gridColumn: '1/3' }}>
                        <div>
                            <p style={{fontWeight: 700}}>Trama resultante</p>
                            <p style={{ width: '520px', overflowWrap: 'break-word'}}>
                                {
                                    tramas.map(trama => (
                                        <>
                                            <span style={{color: 'red'}}>{trama.signo}</span>
                                            <span>{trama.trama}</span>
                                        </>
                                    ))
                                }
                            </p>
                        </div>
                    </main>
                    </>
                    :
                    ''
                }

            </div>


            <Footer />

            <style jsx>{`

                .matriz {
                    display: grid;
                    grid-template-columns: repeat(${largo}, 1fr);
                }

                h1 {
                    color: white;
                    text-align: center;
                }

                .texto {
                    width: 300px;
                    overflow-wrap: break-word;
                    text-align: center;
                }

                .texto2 {
                    width: 500px;
                    overflow-wrap: break-word;
                    text-align: center;
                }

                .content {
                    display: grid; 
                    grid-template-columns: ${ active ? '1fr 1fr' : '1fr'};
                }

                .container {
                    min-height: 100vh;
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                label {
                    display: grid;
                    justify-items: center;
                    color: white;
                }

                span {
                    color: white;
                }

                .matriz > span {
                    padding: 5px;
                    border: 1px dashed white;
                    text-align: center;
                }

                input {
                    height: 30px;
                    border-radius: 20px;
                    border: 1px solid #33333344;
                    padding: 10px;
                    outline: none;
                    text-align: center;
                }

                select {
                    padding: 0px 10px;
                }

                main {
                    padding: 5rem 0;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    border-radius: 30px;
                    margin: 10px;
                    padding: 30px;
                    background: #2C3E5044;
                }


                :globla(body) {
                    background: linear-gradient(180deg, #be93c5 0%, #7bc6cc 100%);
                }

                p {
                    color: white;
                    text-align: center;
                }

                button {
                    border: none;
                    padding: 10px 30px;
                    border-radius: 30px;
                    background-color: #7bc6cc;
                    color: white;
                    cursor: pointer;
                    transition: background-color 1s;
                    outline: none;
                    margin: 0px 5px;
                }

                button:hover {
                    background-color: #7bc6cc99;
                }

            `}</style>

            <style jsx global>{`

              html, body {
                  padding: 0;
                  margin: 0;
                  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
              }

              * {
                  box-sizing: border-box;
              }

      `}</style>

        </div>
    )
}

export default Home