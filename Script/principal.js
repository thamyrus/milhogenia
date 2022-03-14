  stage = new createjs.Stage("canvas");
    stage.enableMouseOver(10);

//////////////////// CARREGAMENTO DE IMAGENS ///////////////////////

    var arquivos = new createjs.LoadQueue(false);
    arquivos.on("complete", menu, this);

    arquivos.loadManifest([

        //Menu:
            {id: "fundoMenu", src:"data/menu/fundoMenu.png"},
            {id: "jogarBotao", src:"data/bt/bt_iniciar.png"},
            {id: "fundoSobre", src:"data/menu/fundoSobre.png"},
            {id: "clickInfo", src:"data/menu/clickInfo.png"},   
            {id: "continuarBotao", src:"data/bt/continuarBt.png"},
            {id: "info1", src:"data/menu/info1.png"},
            {id: "info2", src:"data/menu/info2.png"},
            {id: "info3", src:"data/menu/info3.png"},
            {id: "infoBt1", src:"data/menu/infoBt1.png"},
            {id: "infoBt2", src:"data/menu/infoBt2.png"},
            {id: "infoBt3", src:"data/menu/infoBt3.png"},

        //Caixas de Dialogo
            {id: "caixaGaroto", src:"data/caixaDialogo/caixaGaroto.png"},
            {id: "caixaGarota", src:"data/caixaDialogo/caixaGarota.png"},
            {id: "caixaDoutora", src:"data/caixaDialogo/caixaDoutora.png"},

        //Selecao Personagem
            {id: "fundoSelecao", src:"data/selecaoPersonagem/fundoSelecao.png"},
            {id: "garota", src:"data/selecaoPersonagem/garotaSelecao.png"},
            {id: "garoto", src:"data/selecaoPersonagem/garotoSelecao.png"},
            {id: "garotaBrilho", src:"data/selecaoPersonagem/garotaSelecaoBrilho.png"},
            {id: "garotoBrilho", src:"data/selecaoPersonagem/garotoSelecaoBrilho.png"},

        //Mapa
            {id: "fundoMapa", src:"data/mapa/mapa.png"},
            {id: "predioLab", src:"data/mapa/predios/predioLab.png"},
            {id: "predioFazenda", src:"data/mapa/predios/predioFazenda.png"},
            {id: "predioFabrica", src:"data/mapa/predios/predioFabrica.png"},
            {id: "predioSupermercado", src:"data/mapa/predios/predioSupermercado.png"},
            {id: "predioFazendaBloq", src:"data/mapa/predios/predioFazendaBloq.png"},
            {id: "predioFabricaBloq", src:"data/mapa/predios/predioFabricaBloq.png"},
            {id: "predioSupermercadoBloqueado", src:"data/mapa/predios/predioSupermercadoBloq.png"},
            {id: "predioLabCompleto", src:"data/mapa/predios/predioLabCompleto.png"},
            {id: "predioFazendaCompleto", src:"data/mapa/predios/predioFazendaCompleto.png"},
            {id: "predioFabricaCompleto", src:"data/mapa/predios/predioFabricaCompleto.png"},
            {id: "predioSupermercadoCompleto", src:"data/mapa/predios/predioSupermercadoCompleto.png"},


        //Trouca de Roupa
            {id: "fundoRoupas", src:"data/selecaoRoupa/fundoRoupas.png"},
            {id: "armario", src:"data/selecaoRoupa/armarioThings/armario.png"},
            {id: "jalecoArmario", src:"data/selecaoRoupa/armarioThings/jalecoArmario.png"},
            {id: "jalecoArmarioBrilho", src:"data/selecaoRoupa/armarioThings/jalecoArmarioBrilho.png"},
            {id: "luvasArmario", src:"data/selecaoRoupa/armarioThings/luvasArmario.png"},
            {id: "oculosArmario", src:"data/selecaoRoupa/armarioThings/oculosArmario.png"},
            {id: "toucaArmario", src:"data/selecaoRoupa/armarioThings/toucaArmario.png"},
            {id: "cabecaGarota", src:"data/selecaoRoupa/garota/cabecaGarota.png"},
            {id: "cabecaGarotaCTouca", src:"data/selecaoRoupa/garota/cabecaGarotaCTouca.png"},
            {id: "corpoGarota", src:"data/selecaoRoupa/garota/corpoGarota.png"},
            {id: "cabecaGaroto", src:"data/selecaoRoupa/garoto/cabecaGaroto.png"},
            {id: "cabecaGarotoCTouca", src:"data/selecaoRoupa/garoto/cabecaGarotoCTouca.png"},
            {id: "corpoGaroto", src:"data/selecaoRoupa/garoto/corpoGaroto.png"},
            {id: "jalecoVestir", src:"data/selecaoRoupa/jalecoVestir.png"},
            {id: "luvasVestir", src:"data/selecaoRoupa/luvasVestir.png"},
            {id: "oculosVestir", src:"data/selecaoRoupa/oculosVestir.png"},

        //Fase 1
            {id: "fundoFase1", src:"data/mapa/predios/fase1/objetosImoveis.png"},
            {id: "backgroundFase1", src:"data/mapa/predios/fase1/background.png"},
            {id: "geladeiraFase", src:"data/mapa/predios/fase1/geladeira.png"},
            {id: "bancadaFase", src:"data/mapa/predios/fase1/bancada.png"},
            {id: "instrumentosFase", src:"data/mapa/predios/fase1/instrumentos.png"},
            {id: "cFluxoFase", src:"data/mapa/predios/fase1/camaraFluxo.png"},
            {id: "cVegetacaoFase", src:"data/mapa/predios/fase1/casaVegetacao.png"},
            {id: "biobalisticaFase", src:"data/mapa/predios/fase1/biobalistica.png"},
            {id: "eletroforeseFase", src:"data/mapa/predios/fase1/eletroforese.png"},
            {id: "termocicladorFase", src:"data/mapa/predios/fase1/termociclador.png"},
            {id: "bancadaFaseBrilho", src:"data/mapa/predios/fase1/bancadaBrilho.png"},
            {id: "cFluxoFaseBrilho", src:"data/mapa/predios/fase1/camaraFluxoBrilho.png"},
            {id: "cVegetacaoFaseBrilho", src:"data/mapa/predios/fase1/casaVegetacaoBrilho.png"},
            {id: "biobalisticaFaseBrilho", src:"data/mapa/predios/fase1/biobalisticaBrilho.png"},
            {id: "eletroforeseFaseBrilho", src:"data/mapa/predios/fase1/eletroforeseBrilho.png"},
            {id: "termocicladorFaseBrilho", src:"data/mapa/predios/fase1/termocicladorBrilho.png"},
            {id: "geladeiraAberta", src:"data/mapa/predios/fase1/geladeira/geladeiraFundo.png"},
            {id: "vidros", src:"data/mapa/predios/fase1/geladeira/vidros.png"},
            {id: "placaPetri", src:"data/mapa/predios/fase1/geladeira/placaDePetri.png"},
            {id: "placaMicropart", src:"data/mapa/predios/fase1/geladeira/placaMicropart.png"},
            {id: "solucaoGene", src:"data/mapa/predios/fase1/geladeira/solucaoGene.png"},
            {id: "solucExtrDna", src:"data/mapa/predios/fase1/geladeira/solucExtrDna.png"},
            {id: "solucAmplDna", src:"data/mapa/predios/fase1/geladeira/solucAmplDna.png"},
            {id: "placaPlDePetri", src:"data/mapa/predios/fase1/geladeira/placaPlDePetri.png"},
            {id: "placaPlMicropart", src:"data/mapa/predios/fase1/geladeira/placaPlMicropart.png"},
            {id: "placaGene", src:"data/mapa/predios/fase1/geladeira/placaGene.png"},
            {id: "placaExtrDna", src:"data/mapa/predios/fase1/geladeira/placaExtrDna.png"},
            {id: "placaExtrAmplDna", src:"data/mapa/predios/fase1/geladeira/placaExtrAmplDna.png"},
            {id: "casaVegetacaoAberta", src:"data/mapa/predios/fase1/casaDeVegetacao/casaVegetacaoFundo.png"},
            {id: "vasos", src:"data/mapa/predios/fase1/casaDeVegetacao/vasos.png"},
            {id: "plantaComFolhas", src:"data/mapa/predios/fase1/casaDeVegetacao/plantaComFolhas.png"},
            {id: "itemArrastavel", src:"data/PlaceHolder/arrastavel.png"},
            {id: "erlenmayer", src:'data/PlaceHolder/erlenmayer.png'},
            {id: "biobalisticaAberta", src:"data/mapa/predios/fase1/biobalistica/biobalisticaFundo.png"},
            {id: "biobalisticaMaquina", src:"data/mapa/predios/fase1/biobalistica/biobalisticaMaquina.png"},
            {id: "biobalisticaMaquinaCheia", src:"data/mapa/predios/fase1/biobalistica/biobalisticaMaquinaCheia.png"},
            {id: "solucBiobalistica", src:"data/mapa/predios/fase1/biobalistica/solucBiobalistica.png"},
            {id: "botaoLigaBiobalistica", src:"data/mapa/predios/fase1/biobalistica/botaoLigar.png"},
            {id: "botaoLigaBiobalisticaPress", src:"data/mapa/predios/fase1/biobalistica/botaoLigarApertado.png"},
            {id: "portaAberta", src:"data/mapa/predios/fase1/biobalistica/portaAberta.png"},
            {id: "portaFechada", src:"data/mapa/predios/fase1/biobalistica/portaFechada.png"},
            {id: "biobalisticaPlacaExpl", src:"data/mapa/predios/fase1/biobalistica/biobalisticaPlacaExplante.png"},
            {id: "biobalisticaPlacaExplPeq", src:"data/mapa/predios/fase1/biobalistica/biobalisticaPlacaExplantePequena.png"},
            {id: "biobalisticaEfeito", src:"data/mapa/predios/fase1/biobalistica/biobalisticaEfeito.png"},
            {id: "almofariz", src:'data/mapa/predios/fase1/bancada/almofariz.png'},
            {id: "almofariz1", src:'data/mapa/predios/fase1/bancada/almofariz1.png'},
            {id: "almofariz2", src:'data/mapa/predios/fase1/bancada/almofariz2.png'},
            {id: "pistilo", src:'data/mapa/predios/fase1/bancada/pistilo.png'},
            {id: "folhas", src:'data/mapa/predios/fase1/bancada/folhas.png'},
            {id: "baseFolhas", src:'data/mapa/predios/fase1/bancada/baseFolhas.png'},
            {id: "tuboSemFolha", src:'data/mapa/predios/fase1/bancada/tuboSemFolha.png'},
            {id: "bequer", src:'data/mapa/predios/fase1/bancada/bequer.png'},
            {id: "bastaoVidro", src:'data/mapa/predios/fase1/bancada/bastaoVidro.png'},
            {id: "bastaoFitas", src:'data/mapa/predios/fase1/bancada/bastaoFitas.png'},
            {id: "bastaoSFitas", src:'data/mapa/predios/fase1/bancada/bastaoSFitas.png'},
            {id: "micropipeta1", src:'data/mapa/predios/fase1/bancada/micropipeta1.png'},
            {id: "micropipeta2", src:'data/mapa/predios/fase1/bancada/micropipeta2.png'},
            {id: "micropipeta3", src:'data/mapa/predios/fase1/bancada/micropipeta3.png'},
            {id: "micropipeta4", src:'data/mapa/predios/fase1/bancada/micropipeta4.png'},
            {id: "microtubulo1", src:'data/mapa/predios/fase1/bancada/microtubulo1.png'},
            {id: "microtubulo2", src:'data/mapa/predios/fase1/bancada/microtubulo2.png'},
            {id: "microtubulo3", src:'data/mapa/predios/fase1/bancada/microtubulo3.png'},
            {id: "microtubulo4", src:'data/mapa/predios/fase1/bancada/microtubulo4.png'},
            {id: "solucDnaBanc", src:'data/mapa/predios/fase1/bancada/solucDnaBanc.png'},
            {id: "bequer1", src:'data/mapa/predios/fase1/bancada/bequer1.png'},
            {id: "bequer2", src:'data/mapa/predios/fase1/bancada/bequer2.png'},
            {id: "bequer3", src:'data/mapa/predios/fase1/bancada/bequer3.png'},
            {id: "bequer4", src:'data/mapa/predios/fase1/bancada/bequer4.png'},
            {id: "bequer5", src:'data/mapa/predios/fase1/bancada/bequer5.png'},
            {id: "bequer6", src:'data/mapa/predios/fase1/bancada/bequer6.png'},
            {id: "bequer7", src:'data/mapa/predios/fase1/bancada/bequer7.png'},
            {id: "termocicladorFundo", src:"data/mapa/predios/fase1/termociclador/termocicladorFundo.png"},
            {id: "termocicladorSemBotoes", src:"data/mapa/predios/fase1/termociclador/termocicladorSemBotoes.png"},
            {id: "termocicladorTampaAberta", src:"data/mapa/predios/fase1/termociclador/termocicladorTampaAberta.png"},
            {id: "botaoLigaTermo", src:"data/mapa/predios/fase1/termociclador/botaoLigarTermo.png"},
            {id: "botaoLigaTermoPress", src:"data/mapa/predios/fase1/termociclador/botaoLigarTermoApertado.png"},
            {id: "botaoAbrirTermo", src:"data/mapa/predios/fase1/termociclador/botaoAbrir.png"},
            {id: "botaoAbrirTermoPress", src:"data/mapa/predios/fase1/termociclador/botaoAbrirApertado.png"},
            {id: "microtubuloTermo", src:"data/mapa/predios/fase1/termociclador/microtubuloTermo.png"},
            {id: "pente", src:"data/mapa/predios/fase1/eletroforese/pente.png"},
            {id: "microtubulosVazios", src:"data/mapa/predios/fase1/eletroforese/microtubulosVazios.png"},
            {id: "microtubulosCheios", src:"data/mapa/predios/fase1/eletroforese/microtubulosCheios.png"},
            {id: "gotaGene", src:"data/mapa/predios/fase1/eletroforese/gotaGene.png"},
            {id: "contaGotaCheio", src:"data/mapa/predios/fase1/eletroforese/contaGotaCheio.png"},
            {id: "contaGotaVazio", src:"data/mapa/predios/fase1/eletroforese/contaGotaVazio.png"},
            {id: "eletroforeseFundo", src:"data/mapa/predios/fase1/eletroforese/eletroforeseFundo.png"},
            {id: "eletroforese1", src:"data/mapa/predios/fase1/eletroforese/eletroforese1.png"},
            {id: "eletroforese2", src:"data/mapa/predios/fase1/eletroforese/eletroforese2.png"},
            {id: "eletroforese3", src:"data/mapa/predios/fase1/eletroforese/eletroforese3.png"},
            {id: "eletroforese4", src:"data/mapa/predios/fase1/eletroforese/eletroforese4.png"},
            {id: "eletroforese5", src:"data/mapa/predios/fase1/eletroforese/eletroforese5.png"},
            {id: "gelSeparado", src:"data/mapa/predios/fase1/eletroforese/gelSeparado.png"},
            {id: "positivo", src:"data/mapa/predios/fase1/eletroforese/positivo.png"},
            {id: "negativo", src:"data/mapa/predios/fase1/eletroforese/negativo.png"},
            {id: "eletroZoom", src:"data/mapa/predios/fase1/eletroforese/eletroZoom.png"},
            {id: "eletroZoom1", src:"data/mapa/predios/fase1/eletroforese/eletroZoom1.png"},
            {id: "eletroZoom2", src:"data/mapa/predios/fase1/eletroforese/eletroZoom2.png"},
            {id: "raioX", src:"data/mapa/predios/fase1/eletroforese/raioX.png"},
            {id: "camaraFundo", src:"data/mapa/predios/fase1/eletroforese/camaraFundo.png"},
            {id: "corte", src:"data/mapa/predios/fase1/cFluxo/corte.png"},
            {id: "corte1", src:"data/mapa/predios/fase1/cFluxo/corte1.png"},
            {id: "corte2", src:"data/mapa/predios/fase1/cFluxo/corte2.png"},
            {id: "corte3", src:"data/mapa/predios/fase1/cFluxo/corte3.png"},
            {id: "corte4", src:"data/mapa/predios/fase1/cFluxo/corte4.png"},
            {id: "lamina", src:"data/mapa/predios/fase1/cFluxo/lamina.png"},
            {id: "pinca", src:"data/mapa/predios/fase1/cFluxo/pinca.png"},
            {id: "pincaPlanta", src:"data/mapa/predios/fase1/cFluxo/pincaPlanta.png"},
            {id: "meioCultura", src:"data/mapa/predios/fase1/cFluxo/meioCultura.png"},
            {id: "meioCulturaPlanta", src:"data/mapa/predios/fase1/cFluxo/meioCulturaPlanta.png"},
            {id: "placa", src:"data/mapa/predios/fase1/cFluxo/placa.png"},
            {id: "pote1", src:"data/mapa/predios/fase1/casaDeVegetacao/pote1.png"},
            {id: "pote2", src:"data/mapa/predios/fase1/casaDeVegetacao/pote2.png"},
            {id: "pote3", src:"data/mapa/predios/fase1/casaDeVegetacao/pote3.png"},
            {id: "pote4", src:"data/mapa/predios/fase1/casaDeVegetacao/pote4.png"},
            {id: "pote5", src:"data/mapa/predios/fase1/casaDeVegetacao/pote5.png"},
            {id: "pote6", src:"data/mapa/predios/fase1/casaDeVegetacao/pote6.png"},
            {id: "pote7", src:"data/mapa/predios/fase1/casaDeVegetacao/pote7.png"},
            {id: "pote", src:"data/mapa/predios/fase1/casaDeVegetacao/pote.png"},
            {id: "casaVegetacaoFundo2", src:"data/mapa/predios/fase1/casaDeVegetacao/casaVegetacaoFundo2.png"},
            {id: "cutsceneFase1", src:"data/mapa/predios/fase1/cenaLab.png"},
            {id: "bancadaFundo", src:"data/mapa/predios/fase1/bancada/bancadaFundo.png"},
            {id: "erlen1", src:"data/mapa/predios/fase1/bancada/erlen1.png"},
            {id: "erlen2", src:"data/mapa/predios/fase1/bancada/erlen2.png"},
            {id: "erlen3", src:"data/mapa/predios/fase1/bancada/erlen3.png"},
            {id: "erlen4", src:"data/mapa/predios/fase1/bancada/erlen4.png"},
            {id: "erlen5", src:"data/mapa/predios/fase1/bancada/erlen5.png"},
            {id: "erlen6", src:"data/mapa/predios/fase1/bancada/erlen6.png"},
            {id: "erlen7", src:"data/mapa/predios/fase1/bancada/erlen7.png"},
            {id: "erlen8", src:"data/mapa/predios/fase1/bancada/erlen8.png"},
            {id: "micropartBanc", src:"data/mapa/predios/fase1/bancada/micropartBanc.png"},
            {id: "placaMeioCultura", src:"data/mapa/predios/fase1/bancada/placaMeioCultura.png"},
            {id: "placaPlanta", src:"data/mapa/predios/fase1/biobalistica/placaPlanta.png"},
            {id: "solucGeneBanc", src:"data/mapa/predios/fase1/bancada/solucGeneBanc.png"},
            {id: "tuboEnsaio", src:"data/mapa/predios/fase1/bancada/tuboEnsaio.png"},

        //Fase 2
            {id: "fundoFase2", src:"data/mapa/predios/fase2/fundoFase2.png"},
            {id: "soloDir", src:"data/mapa/predios/fase2/soloDir.png"},
            {id: "soloEsq", src:"data/mapa/predios/fase2/soloEsq.png"},
            {id: "soloDir1", src:'data/mapa/predios/fase2/soloDir1.png'},
            {id: "soloEsq1", src:'data/mapa/predios/fase2/soloEsq1.png'},
            {id: "soloDir2", src:'data/mapa/predios/fase2/soloDir2.png'},
            {id: "soloEsq2", src:'data/mapa/predios/fase2/soloEsq2.png'},
            {id: "soloDir3", src:'data/mapa/predios/fase2/soloDir3.png'},
            {id: "soloEsq3", src:'data/mapa/predios/fase2/soloEsq3.png'},
            {id: "soloDirBt", src:'data/mapa/predios/fase2/soloDirBt.png'},
            {id: "soloEsqBt", src:'data/mapa/predios/fase2/soloEsqBt.png'},
            {id: "soloDirConv", src:'data/mapa/predios/fase2/soloDirConv.png'},
            {id: "soloEsqConv", src:'data/mapa/predios/fase2/soloEsqConv.png'},
            {id: "caixaDir", src:'data/mapa/predios/fase2/interacaoFase2/caixaDir.png'},
            {id: "caixaEsq", src:'data/mapa/predios/fase2/interacaoFase2/caixaEsq.png'},
            {id: "btn_btDir", src:'data/mapa/predios/fase2/interacaoFase2/btn_btDir.png'},
            {id: "btn_btEsq", src:'data/mapa/predios/fase2/interacaoFase2/btn_btEsq.png'},
            {id: "btn_convDir", src:'data/mapa/predios/fase2/interacaoFase2/btn_convDir.png'},
            {id: "btn_convEsq", src:'data/mapa/predios/fase2/interacaoFase2/btn_convEsq.png'},
            {id: "btn_fecharDir", src:'data/mapa/predios/fase2/interacaoFase2/btn_fecharDir.png'},
            {id: "btn_fecharEsq", src:'data/mapa/predios/fase2/interacaoFase2/btn_fecharEsq.png'},
            {id: "cenaFazenda", src:"data/mapa/predios/fase2/cenaFazenda.png"},
            {id: "cenaCaminhao", src:"data/mapa/predios/fase2/cenaCaminhao.png"},

        //Fase 3
            {id: "fundoFase3", src:"data/mapa/predios/fase3/fundoFase3.png"},
            {id: "anima1", src:"data/mapa/predios/fase3/anima1.png"},
            {id: "anima2", src:"data/mapa/predios/fase3/anima2.png"},
            {id: "anima3", src:"data/mapa/predios/fase3/anima3.png"},
            {id: "anima4", src:"data/mapa/predios/fase3/anima4.png"},
            {id: "anima5", src:"data/mapa/predios/fase3/anima5.png"},
            {id: "maq1", src:"data/mapa/predios/fase3/maq1.png"},
            {id: "maq2", src:"data/mapa/predios/fase3/maq2.png"},
            {id: "maq3", src:"data/mapa/predios/fase3/maq3.png"},
            {id: "maq3b", src:"data/mapa/predios/fase3/maq3b.png"},
            {id: "maq4", src:"data/mapa/predios/fase3/maq4.png"},
            {id: "maq5", src:"data/mapa/predios/fase3/maq5.png"},
            {id: "maq5b", src:"data/mapa/predios/fase3/maq5b.png"},
            {id: "est1", src:"data/mapa/predios/fase3/est1.png"},
            {id: "est2", src:"data/mapa/predios/fase3/est2.png"},
            {id: "est3", src:"data/mapa/predios/fase3/est3.png"},
            {id: "est4", src:"data/mapa/predios/fase3/est4.png"},

        // Fase 4
             {id: "fundoFase4", src:"data/mapa/predios/fase4/fundoFase4.png"},

        //Voce Sabia
            {id: "vcSabiaBt", src:"data/bt/vcSabiaBt.png"},
            {id: "fechaSabia", src:"data/voceSabia/fechaSabia.png"},
            {id: "voltaSabia", src:"data/voceSabia/voltaSabia.png"},
            {id: "passaSabia", src:"data/voceSabia/passaSabia.png"},
            {id: "livroLiso", src:"data/voceSabia/livroLiso.png"},
            {id: "sabia1", src:"data/voceSabia/sabia1.png"},
            {id: "sabia2", src:"data/voceSabia/sabia2.png"},
            {id: "sabia3", src:"data/voceSabia/sabia3.png"},
            {id: "sabia4", src:"data/voceSabia/sabia4.png"},
            {id: "sabia5", src:"data/voceSabia/sabia5.png"},
            {id: "sabia6", src:"data/voceSabia/sabia6.png"},
            {id: "sabia7", src:"data/voceSabia/sabia7.png"},
            {id: "sabia8", src:"data/voceSabia/sabia8.png"},
            {id: "sabia9", src:"data/voceSabia/sabia9.png"},
            {id: "sabia10", src:"data/voceSabia/sabia10.png"},
            {id: "sabia11", src:"data/voceSabia/sabia11.png"},
            {id: "sabia12", src:"data/voceSabia/sabia12.png"},
            {id: "sabia13", src:"data/voceSabia/sabia13.png"},
            {id: "sabia14", src:"data/voceSabia/sabia14.png"},

        //Badges
            {id: "badgeBt", src:"data/bt/badgeBt.png"},
            {id: "badge1", src:"data/badges/badge1.png"},
            {id: "badge1pkt", src:"data/badges/badge1pkt.png"},
            {id: "badge2", src:"data/badges/badge2.png"},
            {id: "badge2pkt", src:"data/badges/badge2pkt.png"},
            {id: "badge3", src:"data/badges/badge3.png"},
            {id: "badge3pkt", src:"data/badges/badge3pkt.png"},
            {id: "badge4", src:"data/badges/badge4.png"},
            {id: "badge4pkt", src:"data/badges/badge4pkt.png"},
            {id: "badge5", src:"data/badges/badge5.png"},
            {id: "badge5pkt", src:"data/badges/badge5pkt.png"},
            {id: "caixaBadge", src:"data/badges/caixaBadge.png"},
            {id: "fechaBadges", src:"data/badges/fechaBadges.png"},
    ]);

////////////////////////////////////////////////////////////////////

////////////////// POSICIONAMENTO DAS IMAGENS //////////////////////

  // Todos os elementos que aparecerão durante a execução:

    // Elementos Menu:

        fundoMenu = new createjs.Bitmap('data/menu/fundoMenu.png');
        fundoMenu.x = 0;
        fundoMenu.y = 0;

        jogarBotao = new createjs.Bitmap('data/bt/bt_iniciar.png');
        jogarBotao.x = 320;
        jogarBotao.y = 380;  
        jogarBotao.cursor = "pointer";

        fundoSobre = new createjs.Bitmap('data/menu/fundoSobre.png');
        fundoSobre.x = 0;
        fundoSobre.y = 540;

        clickInfo = new createjs.Bitmap('data/menu/clickInfo.png');
        clickInfo.x = -5;
        clickInfo.y = 0;

        fundoCreditos = new createjs.Bitmap('data/menu/fundoCredito.png');
        fundoCreditos.x = 0;
        fundoCreditos.y = 0;

        info1 = new createjs.Bitmap('data/menu/info1.png');
        info1.x = 0;
        info1.y = 0;

        info2 = new createjs.Bitmap('data/menu/info2.png');
        info2.x = 0;
        info2.y = 0;

        info3 = new createjs.Bitmap('data/menu/info3.png');
        info3.x = 0;
        info3.y = 0;

        infoBt1 = new createjs.Bitmap('data/menu/infoBt1.png');
        infoBt1.x = 0;
        infoBt1.y = 0;

        infoBt2 = new createjs.Bitmap('data/menu/infoBt2.png');
        infoBt2.x = 0;
        infoBt2.y = 0;

        infoBt3 = new createjs.Bitmap('data/menu/infoBt3.png');
        infoBt3.x = 0;
        infoBt3.y = 0;

    // Elementos Selec Person:

        fundoSelecao = new createjs.Bitmap('data/selecaoPersonagem/fundoSelecao.png')
        fundoSelecao.x = 0;
        fundoSelecao.y = 0;

        garota = new createjs.Bitmap('data/selecaoPersonagem/garotaSelecao.png')
        garota.x = 100;
        garota.y = 60;
        garota.cursor = "pointer";

        garoto = new createjs.Bitmap('data/selecaoPersonagem/garotoSelecao.png')
        garoto.x = 400;
        garoto.y = 60;
        garoto.cursor = "pointer";

        garotaBrilho = new createjs.Bitmap('data/selecaoPersonagem/garotaSelecaoBrilho.png')
        garotaBrilho.x = 100;
        garotaBrilho.y = 60;
        garotaBrilho.cursor = "pointer";
        garotaBrilho.alpha = 0;

        garotoBrilho = new createjs.Bitmap('data/selecaoPersonagem/garotoSelecaoBrilho.png')
        garotoBrilho.x = 400;
        garotoBrilho.y = 60;
        garotoBrilho.cursor = "pointer";
        garotoBrilho.alpha = 0;

    // Elementos Mapa:

        fundoMapa = new createjs.Bitmap('data/mapa/mapa.png');
        fundoMapa.x = 0;
        fundoMapa.y = 0;
        fundoMapa.visible = true;

        predioLab = new createjs.Bitmap('data/mapa/predios/predioLab.png');
        predioLab.x = 0;
        predioLab.y = 0;

        predioFazenda = new createjs.Bitmap('data/mapa/predios/predioFazenda.png');
        predioFazenda.x = 0;
        predioFazenda.y = 0;

        predioFabrica = new createjs.Bitmap('data/mapa/predios/predioFabrica.png');
        predioFabrica.x = 0;
        predioFabrica.y = 0;

        predioSupermercado = new createjs.Bitmap('data/mapa/predios/predioSupermercado.png');
        predioSupermercado.x = 0;
        predioSupermercado.y = 0;

        predioFazendaBloqueado = new createjs.Bitmap('data/mapa/predios/predioFazendaBloq.png');
        predioFazendaBloqueado.x = 0;
        predioFazendaBloqueado.y = 0;

        predioFabricaBloqueado = new createjs.Bitmap('data/mapa/predios/predioFabricaBloq.png');
        predioFabricaBloqueado.x = 0;
        predioFabricaBloqueado.y = 0;

        predioSupermercadoBloqueado = new createjs.Bitmap('data/mapa/predios/predioSupermercadoBloq.png');
        predioSupermercadoBloqueado.x = 0;
        predioSupermercadoBloqueado.y = 0;

        predioLabCompleto = new createjs.Bitmap('data/mapa/predios/predioLabCompleto.png');
        predioLabCompleto.x = 0;
        predioLabCompleto.y = 0;

        predioFazendaCompleto = new createjs.Bitmap('data/mapa/predios/predioFazendaCompleto.png');
        predioFazendaCompleto.x = 0;
        predioFazendaCompleto.y = 0;

        predioFabricaCompleto = new createjs.Bitmap('data/mapa/predios/predioFabricaCompleto.png');
        predioFabricaCompleto.x = 0;
        predioFabricaCompleto.y = 0;

        predioSupermercadoCompleto = new createjs.Bitmap('data/mapa/predios/predioSupermercadoCompleto.png');
        predioSupermercadoCompleto.x = 0;
        predioSupermercadoCompleto.y = 0;

    // Elementos Troca Roupa:

        fundoRoupas = new createjs.Bitmap('data/selecaoRoupa/fundoRoupas.png');
        fundoRoupas.x = 0;
        fundoRoupas.y = 0;

        armario = new createjs.Bitmap('data/selecaoRoupa/armarioThings/armario.png');
        armario.x = 0;
        armario.y = 0;
         
        jalecoArmario = new createjs.Bitmap('data/selecaoRoupa/armarioThings/jalecoArmario.png');
        jalecoArmario.x = 0;
        jalecoArmario.y = 0;
        jalecoArmario.cursor = "pointer";

        jalecoVestir = new createjs.Bitmap('data/selecaoRoupa/jalecoVestir.png');
        jalecoVestir.x = 0;
        jalecoVestir.y = 0;

        luvasArmario = new createjs.Bitmap('data/selecaoRoupa/armarioThings/luvasArmario.png');
        luvasArmario.x = 0;
        luvasArmario.y = 0;
        luvasArmario.cursor = "pointer";

        luvasVestir = new createjs.Bitmap('data/selecaoRoupa/luvasVestir.png');
        luvasVestir.x = 0;
        luvasVestir.y = 0;

        oculosArmario = new createjs.Bitmap('data/selecaoRoupa/armarioThings/oculosArmario.png');
        oculosArmario.x = 0;
        oculosArmario.y = 0;
        oculosArmario.cursor = "pointer";
     
        oculosVestir = new createjs.Bitmap('data/selecaoRoupa/oculosVestir.png');
        oculosVestir.x = 0;
        oculosVestir.y = 0;

        toucaArmario = new createjs.Bitmap('data/selecaoRoupa/armarioThings/toucaArmario.png');
        toucaArmario.x = 0;
        toucaArmario.y = 0;
        toucaArmario.cursor = "pointer";

        cabecaGarota = new createjs.Bitmap('data/selecaoRoupa/garota/cabecaGarota.png');
        cabecaGarota.x = 0;
        cabecaGarota.y = 0;

        corpoGarota = new createjs.Bitmap('data/selecaoRoupa/garota/corpoGarota.png');
        corpoGarota.x = 0;
        corpoGarota.y = 0;

        cabecaGarotaCTouca = new createjs.Bitmap('data/selecaoRoupa/garota/cabecaGarotaCTouca.png');
        cabecaGarotaCTouca.x = 0;
        cabecaGarotaCTouca.y = 0;
        cabecaGarotaCTouca.visible = false;

        cabecaGaroto = new createjs.Bitmap('data/selecaoRoupa/garoto/cabecaGaroto.png');
        cabecaGaroto.x = 0;
        cabecaGaroto.y = 0;

        corpoGaroto = new createjs.Bitmap('data/selecaoRoupa/garoto/corpoGaroto.png');
        corpoGaroto.x = 0;
        corpoGaroto.y = 0;

        cabecaGarotoCTouca = new createjs.Bitmap('data/selecaoRoupa/garoto/cabecaGarotoCTouca.png');
        cabecaGarotoCTouca.x = 0;
        cabecaGarotoCTouca.y = 0;
        cabecaGarotoCTouca.visible = false;

    // Elementos Fase 1:

        backgroundFase1 = new createjs.Bitmap('data/mapa/predios/fase1/background.png');
        backgroundFase1.x = 0;
        backgroundFase1.y = 0;

        fundoFase1 = new createjs.Bitmap('data/mapa/predios/fase1/objetosImoveis.png');
        fundoFase1.x = 0;
        fundoFase1.y = 0;

        instrumentosFase = new createjs.Bitmap('data/mapa/predios/fase1/instrumentos.png');
        instrumentosFase.x = 0;
        instrumentosFase.y = 0;

        geladeiraFase = new createjs.Bitmap('data/mapa/predios/fase1/geladeira.png');
        geladeiraFase.x = 0;
        geladeiraFase.y = 0;

        cFluxoFase = new createjs.Bitmap('data/mapa/predios/fase1/camaraFluxo.png');
        cFluxoFase.x = 0;
        cFluxoFase.y = 0;

        cVegetacaoFase = new createjs.Bitmap('data/mapa/predios/fase1/casaVegetacao.png');
        cVegetacaoFase.x = 0;
        cVegetacaoFase.y = 0;

        bancadaFase = new createjs.Bitmap('data/mapa/predios/fase1/bancada.png');
        bancadaFase.x = 0;
        bancadaFase.y = 0;

        termocicladorFase = new createjs.Bitmap('data/mapa/predios/fase1/termociclador.png');
        termocicladorFase.x = 0;
        termocicladorFase.y = 0;

        biobalisticaFase = new createjs.Bitmap('data/mapa/predios/fase1/biobalistica.png');
        biobalisticaFase.x = 0;
        biobalisticaFase.y = 0;

        eletroforeseFase = new createjs.Bitmap('data/mapa/predios/fase1/eletroforese.png')
        eletroforeseFase.x = 0;
        eletroforeseFase.y = 0;

        geladeiraFaseBrilho = new createjs.Bitmap('data/mapa/predios/fase1/geladeiraBrilho.png');
        geladeiraFaseBrilho.x = 0;
        geladeiraFaseBrilho.y = 0;
        geladeiraFaseBrilho.alpha = 0;

        cFluxoFaseBrilho = new createjs.Bitmap('data/mapa/predios/fase1/camaraFluxoBrilho.png');
        cFluxoFaseBrilho.x = 0;
        cFluxoFaseBrilho.y = 0;
        cFluxoFaseBrilho.alpha = 0;

        cVegetacaoFaseBrilho = new createjs.Bitmap('data/mapa/predios/fase1/casaVegetacaoBrilho.png');
        cVegetacaoFaseBrilho.x = 0;
        cVegetacaoFaseBrilho.y = 0;
        cVegetacaoFaseBrilho.alpha = 0;

        bancadaFaseBrilho = new createjs.Bitmap('data/mapa/predios/fase1/bancadaBrilho.png');
        bancadaFaseBrilho.x = 0;
        bancadaFaseBrilho.y = 0;
        bancadaFaseBrilho.alpha = 0;

        termocicladorFaseBrilho = new createjs.Bitmap('data/mapa/predios/fase1/termocicladorBrilho.png');
        termocicladorFaseBrilho.x = 0;
        termocicladorFaseBrilho.y = 0;
        termocicladorFaseBrilho.alpha = 0;

        biobalisticaFaseBrilho = new createjs.Bitmap('data/mapa/predios/fase1/biobalisticaBrilho.png');
        biobalisticaFaseBrilho.x = 0;
        biobalisticaFaseBrilho.y = 0;
        biobalisticaFaseBrilho.alpha = 0;

        eletroforeseFaseBrilho = new createjs.Bitmap('data/mapa/predios/fase1/eletroforeseBrilho.png')
        eletroforeseFaseBrilho.x = 0;
        eletroforeseFaseBrilho.y = 0;
        eletroforeseFaseBrilho.alpha = 0;

        geladeiraAberta = new createjs.Bitmap('data/mapa/predios/fase1/geladeira/geladeiraFundo.png')
        geladeiraAberta.x = 0;
        geladeiraAberta.y = 0;
        geladeiraAberta.visible = false;

        placaPetri = new createjs.Bitmap('data/mapa/predios/fase1/geladeira/placaDePetri.png')
        placaPetri.x = 0;
        placaPetri.y = 0;
        placaPetri.cursor = "pointer";

        placaMicropart = new createjs.Bitmap('data/mapa/predios/fase1/geladeira/placaMicropart.png')
        placaMicropart.x = 0;
        placaMicropart.y = 0;
        placaMicropart.cursor = "pointer";

        solucaoGene = new createjs.Bitmap('data/mapa/predios/fase1/geladeira/solucaoGene.png')
        solucaoGene.x = 0;
        solucaoGene.y = 0;
        solucaoGene.cursor = "pointer";

        solucExtrDna = new createjs.Bitmap("data/mapa/predios/fase1/geladeira/solucExtrDna.png")
        solucExtrDna.x = 0;
        solucExtrDna.y = 0;
        solucExtrDna.cursor = "pointer";

        solucAmplDna = new createjs.Bitmap("data/mapa/predios/fase1/geladeira/solucAmplDna.png")
        solucAmplDna.x = 0;
        solucAmplDna.y = 0;
        solucAmplDna.cursor = "pointer";

        placaPlDePetri = new createjs.Bitmap('data/mapa/predios/fase1/geladeira/placaPlDePetri.png')
        placaPlDePetri.x = 0;
        placaPlDePetri.y = 0;
        placaPlDePetri.alpha = 0;

        placaPlMicropart = new createjs.Bitmap('data/mapa/predios/fase1/geladeira/placaPlMicropart.png')
        placaPlMicropart.x = 0;
        placaPlMicropart.y = 0;
        placaPlMicropart.alpha = 0;

        placaGene = new createjs.Bitmap('data/mapa/predios/fase1/geladeira/placaGene.png')
        placaGene.x = 0;
        placaGene.y = 0;
        placaGene.alpha = 0;

        placaExtrDna = new createjs.Bitmap("data/mapa/predios/fase1/geladeira/placaExtrDna.png")
        placaExtrDna.x = 0;
        placaExtrDna.y = 0;
        placaExtrDna.alpha = 0;

        placaAmplDna = new createjs.Bitmap("data/mapa/predios/fase1/geladeira/placaAmplDna.png")
        placaAmplDna.x = 0;
        placaAmplDna.y = 0;
        placaAmplDna.alpha = 0;

        bancadaFundo = new createjs.Bitmap("data/mapa/predios/fase1/bancada/bancadaFundo.png")
        bancadaFundo.x = 0;
        bancadaFundo.y = 0;
        bancadaFundo.visible = false;

        placaMicropartBanc = new createjs.Bitmap("data/mapa/predios/fase1/bancada/micropartBanc.png")
        placaMicropartBanc.x = 100;
        placaMicropartBanc.y = 440;
        placaMicropartBanc.cursor = "pointer";

        solucaoGeneBanc = new createjs.Bitmap("data/mapa/predios/fase1/bancada/solucGeneBanc.png")
        solucaoGeneBanc.x = 100;
        solucaoGeneBanc.y = 360;
        solucaoGeneBanc.cursor = "pointer";

        erlen1 = new createjs.Bitmap("data/mapa/predios/fase1/bancada/erlen1.png")
        erlen1.x = 0;
        erlen1.y = 0;

        erlen2 = new createjs.Bitmap("data/mapa/predios/fase1/bancada/erlen2.png")
        erlen2.x = 0;
        erlen2.y = 0;

        erlen3 = new createjs.Bitmap("data/mapa/predios/fase1/bancada/erlen3.png")
        erlen3.x = 0;
        erlen3.y = 0;

        erlen4 = new createjs.Bitmap("data/mapa/predios/fase1/bancada/erlen4.png")
        erlen4.x = 0;
        erlen4.y = 0;

        erlen5 = new createjs.Bitmap("data/mapa/predios/fase1/bancada/erlen5.png")
        erlen5.x = 0;
        erlen5.y = 0;

        erlen6 = new createjs.Bitmap("data/mapa/predios/fase1/bancada/erlen6.png")
        erlen6.x = 0;
        erlen6.y = 0;

        erlen7 = new createjs.Bitmap("data/mapa/predios/fase1/bancada/erlen7.png")
        erlen7.x = 0;
        erlen7.y = 0;

        erlen8 = new createjs.Bitmap("data/mapa/predios/fase1/bancada/erlen8.png")
        erlen8.x = 0;
        erlen8.y = 0;

        placaPlanta = new createjs.Bitmap("data/mapa/predios/fase1/biobalistica/placaPlanta.png")
        placaPlanta.x = 0;
        placaPlanta.y = 0;

        placaMeioCultura = new createjs.Bitmap("data/mapa/predios/fase1/bancada/placaMeioCultura.png")
        placaMeioCultura.x = 0;
        placaMeioCultura.y = 0;

        tuboEnsaio = new createjs.Bitmap("data/mapa/predios/fase1/bancada/tuboEnsaio.png")
        tuboEnsaio.x = 0;
        tuboEnsaio.y = 0;

        cVegetacaoAberta = new createjs.Bitmap('data/mapa/predios/fase1/casaDeVegetacao/casaVegetacaoFundo.png')
        cVegetacaoAberta.x = 0;
        cVegetacaoAberta.y = 0;

        cVegetacaoVasos = new createjs.Bitmap('data/mapa/predios/fase1/casaDeVegetacao/vasos.png')
        cVegetacaoVasos.x = 0;
        cVegetacaoVasos.y = 0;

        cVegetacaoPlantCFol = new createjs.Bitmap('data/mapa/predios/fase1/casaDeVegetacao/plantaComFolhas.png')
        cVegetacaoPlantCFol.x = 0;
        cVegetacaoPlantCFol.y = 0;
        cVegetacaoPlantCFol.cursor = "pointer";

        cVegetacaoPlantSFol = new createjs.Bitmap('data/mapa/predios/fase1/casaDeVegetacao/plantaSemFolhas.png')
        cVegetacaoPlantSFol.x = 0;
        cVegetacaoPlantSFol.y = 0;

        itemArrastavel = new createjs.Bitmap('data/PlaceHolder/arrastavel.png')
        itemArrastavel.x = 100;
        itemArrastavel.y = 250;
        itemArrastavel.cursor = "pointer";

        biobalisticaFundo= new createjs.Bitmap("data/mapa/predios/fase1/biobalistica/biobalisticaFundo.png")
        biobalisticaFundo.x = 0;
        biobalisticaFundo.y = 0;

        biobalisticaMaquina= new createjs.Bitmap("data/mapa/predios/fase1/biobalistica/biobalisticaMaquina.png")
        biobalisticaMaquina.x = 0;
        biobalisticaMaquina.y = 0;

        biobalisticaMaquinaCheia= new createjs.Bitmap("data/mapa/predios/fase1/biobalistica/biobalisticaMaquinaCheia.png")
        biobalisticaMaquinaCheia.x = 0;
        biobalisticaMaquinaCheia.y = 0;

        solucBiobalistica= new createjs.Bitmap("data/mapa/predios/fase1/biobalistica/solucBiobalistica.png")
        solucBiobalistica.x = 600;
        solucBiobalistica.y = 500;

        botaoLigaBiobalistica= new createjs.Bitmap("data/mapa/predios/fase1/biobalistica/botaoLigar.png")
        botaoLigaBiobalistica.x = 0;
        botaoLigaBiobalistica.y = 0;

        botaoLigaBiobalisticaPress= new createjs.Bitmap("data/mapa/predios/fase1/biobalistica/botaoLigarApertado.png")
        botaoLigaBiobalisticaPress.x = 0;
        botaoLigaBiobalisticaPress.y = 0;

        portaAberta= new createjs.Bitmap("data/mapa/predios/fase1/biobalistica/portaAberta.png")
        portaAberta.x = 0;
        portaAberta.y = 0;

        portaFechada= new createjs.Bitmap("data/mapa/predios/fase1/biobalistica/portaFechada.png")
        portaFechada.x = 0;
        portaFechada.y = 0;

        biobalisticaPlacaExpl= new createjs.Bitmap("data/mapa/predios/fase1/biobalistica/biobalisticaPlacaExplante.png")
        biobalisticaPlacaExpl.x = 600;
        biobalisticaPlacaExpl.y = 500;

        biobalisticaPlacaExplPeq= new createjs.Bitmap("data/mapa/predios/fase1/biobalistica/biobalisticaPlacaExplantePequena.png")
        biobalisticaPlacaExplPeq.x = 0;
        biobalisticaPlacaExplPeq.y = 0;

        biobalisticaEfeito= new createjs.Bitmap("data/mapa/predios/fase1/biobalistica/biobalisticaEfeito.png")
        biobalisticaEfeito.x = 0;
        biobalisticaEfeito.y = 0;

        almofariz = new createjs.Bitmap('data/mapa/predios/fase1/bancada/almofariz.png')
        almofariz.x = 0;
        almofariz.y = 0;

        almofariz1 = new createjs.Bitmap('data/mapa/predios/fase1/bancada/almofariz1.png')
        almofariz1.x = 0;
        almofariz1.y = 0;

        almofariz2 = new createjs.Bitmap('data/mapa/predios/fase1/bancada/almofariz2.png')
        almofariz2.x = 0;
        almofariz2.y = 0;

        pistilo = new createjs.Bitmap('data/mapa/predios/fase1/bancada/pistilo.png')
        pistilo.x = 430;
        pistilo.y = 100;

        folhas = new createjs.Bitmap('data/mapa/predios/fase1/bancada/folhas.png')
        folhas.x = 90;
        folhas.y = 440;

        baseFolhas = new createjs.Bitmap('data/mapa/predios/fase1/bancada/baseFolhas.png')
        baseFolhas.x = 0;
        baseFolhas.y = 0;

        tuboSemFolha = new createjs.Bitmap('data/mapa/predios/fase1/bancada/tuboSemFolha.png')
        tuboSemFolha.x = 0;
        tuboSemFolha.y = 0;

        bequer = new createjs.Bitmap('data/mapa/predios/fase1/bancada/bequer.png')
        bequer.x = 0;
        bequer.y = 0;

        bequer1 = new createjs.Bitmap('data/mapa/predios/fase1/bancada/bequer1.png')
        bequer1.x = 0;
        bequer1.y = 0;

        bequer2 = new createjs.Bitmap('data/mapa/predios/fase1/bancada/bequer2.png')
        bequer2.x = 0;
        bequer2.y = 0;

        bequer3 = new createjs.Bitmap('data/mapa/predios/fase1/bancada/bequer3.png')
        bequer3.x = 0;
        bequer3.y = 0;

        bequer4 = new createjs.Bitmap('data/mapa/predios/fase1/bancada/bequer4.png')
        bequer4.x = 0;
        bequer4.y = 0;

        bequer5 = new createjs.Bitmap('data/mapa/predios/fase1/bancada/bequer5.png')
        bequer5.x = 0;
        bequer5.y = 0;

        bequer6 = new createjs.Bitmap('data/mapa/predios/fase1/bancada/bequer6.png')
        bequer6.x = 0;
        bequer6.y = 0;

        bequer7 = new createjs.Bitmap('data/mapa/predios/fase1/bancada/bequer7.png')
        bequer7.x = 0;
        bequer7.y = 0;

        bastaoFitas = new createjs.Bitmap('data/mapa/predios/fase1/bancada/bastaoFitas.png')
        bastaoFitas.x = 0;
        bastaoFitas.y = 0;

        bastaoSFitas = new createjs.Bitmap('data/mapa/predios/fase1/bancada/bastaoSFitas.png')
        bastaoSFitas.x = 0;
        bastaoSFitas.y = 0;

        micropipeta1 = new createjs.Bitmap('data/mapa/predios/fase1/bancada/micropipeta1.png')
        micropipeta1.x = 0;
        micropipeta1.y = 0;

        micropipeta2 = new createjs.Bitmap('data/mapa/predios/fase1/bancada/micropipeta2.png')
        micropipeta2.x = 0;
        micropipeta2.y = 0;

        micropipeta3 = new createjs.Bitmap('data/mapa/predios/fase1/bancada/micropipeta3.png')
        micropipeta3.x = 0;
        micropipeta3.y = 0;

        micropipeta4 = new createjs.Bitmap('data/mapa/predios/fase1/bancada/micropipeta4.png')
        micropipeta4.x = 0;
        micropipeta4.y = 0;

        microtubulo1 = new createjs.Bitmap('data/mapa/predios/fase1/bancada/microtubulo1.png')
        microtubulo1.x = 0;
        microtubulo1.y = 0;

        microtubulo2 = new createjs.Bitmap('data/mapa/predios/fase1/bancada/microtubulo2.png')
        microtubulo2.x = 0;
        microtubulo2.y = 0;

        microtubulo3 = new createjs.Bitmap('data/mapa/predios/fase1/bancada/microtubulo3.png')
        microtubulo3.x = 0;
        microtubulo3.y = 0;

        microtubulo4 = new createjs.Bitmap('data/mapa/predios/fase1/bancada/microtubulo4.png')
        microtubulo4.x = 0;
        microtubulo4.y = 0;

        solucDnaBanc = new createjs.Bitmap('data/mapa/predios/fase1/bancada/solucDnaBanc.png')
        solucDnaBanc.x = 0;
        solucDnaBanc.y = 0;

        bastaoVidro = new createjs.Bitmap('data/mapa/predios/fase1/bancada/bastaoVidro.png')
        bastaoVidro.x = 400;
        bastaoVidro.y = 150;

        bastaoVidro2 = new createjs.Bitmap("data/PlaceHolder/bastaoVidro.png")
        bastaoVidro2.x = 120;
        bastaoVidro2.y = 30;

        termocicladorFundo = new createjs.Bitmap("data/mapa/predios/fase1/termociclador/termocicladorFundo.png")
        termocicladorFundo.x = 0;
        termocicladorFundo.y = 0;

        termociclador = new createjs.Bitmap("data/mapa/predios/fase1/termociclador/termocicladorSemBotoes.png")
        termociclador.x = 0;
        termociclador.y = 0;

        termocicladorTampa = new createjs.Bitmap("data/mapa/predios/fase1/termociclador/termocicladorTampaAberta.png")
        termocicladorTampa.x = 0;
        termocicladorTampa.y = 0;

        botaoLigarTermo = new createjs.Bitmap("data/mapa/predios/fase1/termociclador/botaoLigarTermo.png")
        botaoLigarTermo.x = 0;
        botaoLigarTermo.y = 0;

        botaoLigarTermoPress = new createjs.Bitmap("data/mapa/predios/fase1/termociclador/botaoLigarTermoApertado.png")
        botaoLigarTermoPress.x = 0;
        botaoLigarTermoPress.y = 0;

        botaoAbrirTermo = new createjs.Bitmap("data/mapa/predios/fase1/termociclador/botaoAbrir.png")
        botaoAbrirTermo.x = 0;
        botaoAbrirTermo.y = 0;

        botaoAbrirTermoPress = new createjs.Bitmap("data/mapa/predios/fase1/termociclador/botaoAbrirApertado.png")
        botaoAbrirTermoPress.x = 0;
        botaoAbrirTermoPress.y = 0;

        microtubuloTermo = new createjs.Bitmap("data/mapa/predios/fase1/termociclador/microtubuloTermo.png")
        microtubuloTermo.x = 560;
        microtubuloTermo.y = 100;

        pente = new createjs.Bitmap("data/mapa/predios/fase1/eletroforese/pente.png")
        pente.x = 135;
        pente.y = 550;

        microtubulosVazios = new createjs.Bitmap("data/mapa/predios/fase1/eletroforese/microtubulosVazios.png")
        microtubulosVazios.x = 0;
        microtubulosVazios.y = 0;

        microtubulosCheios = new createjs.Bitmap("data/mapa/predios/fase1/eletroforese/microtubulosCheios.png")
        microtubulosCheios.x = 0;
        microtubulosCheios.y = 0;

        gotaGene = new createjs.Bitmap("data/mapa/predios/fase1/eletroforese/gotaGene.png")
        gotaGene.x = 0;
        gotaGene.y = 0;

        contaGotaCheio = new createjs.Bitmap("data/mapa/predios/fase1/eletroforese/contaGotaCheio.png")
        contaGotaCheio.x = 270;
        contaGotaCheio.y = 530;

        contaGotaVazio = new createjs.Bitmap("data/mapa/predios/fase1/eletroforese/contaGotaVazio.png")
        contaGotaVazio.x = 230;
        contaGotaVazio.y = 530;

        eletroforeseFundo = new createjs.Bitmap("data/mapa/predios/fase1/eletroforese/eletroforeseFundo.png")
        eletroforeseFundo.x = 0;
        eletroforeseFundo.y = 0;

        eletroforese1 = new createjs.Bitmap("data/mapa/predios/fase1/eletroforese/eletroforese1.png")
        eletroforese1.x = 0;
        eletroforese1.y = 0;

        eletroforese2 = new createjs.Bitmap("data/mapa/predios/fase1/eletroforese/eletroforese2.png")
        eletroforese2.x = 0;
        eletroforese2.y = 0;

        eletroforese3 = new createjs.Bitmap("data/mapa/predios/fase1/eletroforese/eletroforese3.png")
        eletroforese3.x = 0;
        eletroforese3.y = 0;

        eletroforese4 = new createjs.Bitmap("data/mapa/predios/fase1/eletroforese/eletroforese4.png")
        eletroforese4.x = 0;
        eletroforese4.y = 0;

        eletroforese5 = new createjs.Bitmap("data/mapa/predios/fase1/eletroforese/eletroforese5.png")
        eletroforese5.x = 0;
        eletroforese5.y = 0;

        gelSeparado = new createjs.Bitmap("data/mapa/predios/fase1/eletroforese/gelSeparado.png")
        gelSeparado.x = 125;
        gelSeparado.y = 460; 

        positivo = new createjs.Bitmap("data/mapa/predios/fase1/eletroforese/positivo.png")
        positivo.x = 0;
        positivo.y = 0; 

        negativo = new createjs.Bitmap("data/mapa/predios/fase1/eletroforese/negativo.png")
        negativo.x = 0;
        negativo.y = 0; 

        eletroZoom = new createjs.Bitmap("data/mapa/predios/fase1/eletroforese/eletroZoom.png")
        eletroZoom.x = 0;
        eletroZoom.y = 0; 

        eletroZoom1 = new createjs.Bitmap("data/mapa/predios/fase1/eletroforese/eletroZoom1.png")
        eletroZoom1.x = 0;
        eletroZoom1.y = 0; 

        eletroZoom2 = new createjs.Bitmap("data/mapa/predios/fase1/eletroforese/eletroZoom2.png")
        eletroZoom2.x = 0;
        eletroZoom2.y = 0; 

        raioX = new createjs.Bitmap("data/mapa/predios/fase1/eletroforese/raioX.png")
        raioX.x = 0;
        raioX.y = 0; 
        raioX.visible = false;

        gelFixo = new createjs.Bitmap("data/mapa/predios/fase1/eletroforese/gelFixo.png")
        gelFixo.x = 0;
        gelFixo.y = 0; 

        camaraFundo = new createjs.Bitmap('data/mapa/predios/fase1/cFluxo/camaraFundo.png')
        camaraFundo.x = 0;
        camaraFundo.y = 0;

        corte = new createjs.Bitmap('data/mapa/predios/fase1/cFluxo/corte.png')
        corte.x = 0;
        corte.y = 0;

        corte1 = new createjs.Bitmap('data/mapa/predios/fase1/cFluxo/corte1.png')
        corte1.x = 0;
        corte1.y = 0;

        corte2 = new createjs.Bitmap('data/mapa/predios/fase1/cFluxo/corte2.png')
        corte2.x = 0;
        corte2.y = 0;

        corte3 = new createjs.Bitmap('data/mapa/predios/fase1/cFluxo/corte3.png')
        corte3.x = 0;
        corte3.y = 0;

        corte4 = new createjs.Bitmap('data/mapa/predios/fase1/cFluxo/corte4.png')
        corte4.x = 0;
        corte4.y = 0;

        lamina = new createjs.Bitmap('data/mapa/predios/fase1/cFluxo/lamina.png')
        lamina.x = 0;
        lamina.y = 0;
        lamina.cursor = "pointer";

        pinca = new createjs.Bitmap('data/mapa/predios/fase1/cFluxo/pinca.png')
        pinca.x = 500;
        pinca.y = 120;
        pinca.cursor = "pointer";

        pincaPlanta = new createjs.Bitmap('data/mapa/predios/fase1/cFluxo/pincaPlanta.png')
        pincaPlanta.x = 500;
        pincaPlanta.y = 300;
        pincaPlanta.cursor = "pointer";

        meioCultura = new createjs.Bitmap('data/mapa/predios/fase1/cFluxo/meioCultura.png')
        meioCultura.x = 0;
        meioCultura.y = 0;

        meioCulturaPlanta = new createjs.Bitmap('data/mapa/predios/fase1/cFluxo/meioCulturaPlanta.png')
        meioCulturaPlanta.x = 0;
        meioCulturaPlanta.y = 0;

        placa = new createjs.Bitmap('data/mapa/predios/fase1/cFluxo/placa.png')
        placa.x = 0;
        placa.y = 0;

        pote = new createjs.Bitmap("data/mapa/predios/fase1/casaDeVegetacao/pote.png")
        pote.x = 0;
        pote.y = 0;
        pote.cursor = "pointer";

        pote1 = new createjs.Bitmap("data/mapa/predios/fase1/casaDeVegetacao/pote1.png")
        pote1.x = 0;
        pote1.y = 0;
        pote1.cursor = "pointer";

        pote2 = new createjs.Bitmap("data/mapa/predios/fase1/casaDeVegetacao/pote2.png")
        pote2.x = 0;
        pote2.y = 0;
        pote2.cursor = "pointer";

        pote3 = new createjs.Bitmap("data/mapa/predios/fase1/casaDeVegetacao/pote3.png")
        pote3.x = 0;
        pote3.y = 0;
        pote3.cursor = "pointer";

        pote4 = new createjs.Bitmap("data/mapa/predios/fase1/casaDeVegetacao/pote4.png")
        pote4.x = 0;
        pote4.y = 0;

        pote5 = new createjs.Bitmap("data/mapa/predios/fase1/casaDeVegetacao/pote5.png")
        pote5.x = 0;
        pote5.y = 0;

        pote6 = new createjs.Bitmap("data/mapa/predios/fase1/casaDeVegetacao/pote6.png")
        pote6.x = 0;
        pote6.y = 0;

        pote7 = new createjs.Bitmap("data/mapa/predios/fase1/casaDeVegetacao/pote7.png")
        pote7.x = 0;
        pote7.y = 0;

        cVegetacaoFundo2 = new createjs.Bitmap('data/mapa/predios/fase1/casaDeVegetacao/casaVegetacaoFundo.png')
        cVegetacaoFundo2.x = 0;
        cVegetacaoFundo2.y = 0;

        cenaLab = new createjs.Bitmap("data/mapa/predios/fase1/cenaLab.png")
        cenaLab.x = 0;
        cenaLab.y = 0;
        cenaLab.visible = false,

        /* = new createjs.Bitmap()
        .x = 0;
        .y = 0;  */

    // Elementos Fase 2:
    
        fundoFase2 = new createjs.Bitmap('data/mapa/predios/fase2/fundoFase2.png');
        fundoFase2.x = 0;
        fundoFase2.y = 0;

        cenaFazenda = new createjs.Bitmap('data/mapa/predios/fase2/cenaFazenda.png');
        cenaFazenda.x = 0;
        cenaFazenda.y = 0;
        cenaFazenda.visible = false;

        cenaCaminhao = new createjs.Bitmap('data/mapa/predios/fase2/cenaCaminhao.png');
        cenaCaminhao.x = 0;
        cenaCaminhao.y = 0;
        cenaCaminhao.visible = false;

        soloDir = new createjs.Bitmap('data/mapa/predios/fase2/soloDir.png');
        soloDir.x = 0;
        soloDir.y = 0;
        
        soloEsq = new createjs.Bitmap('data/mapa/predios/fase2/soloEsq.png');
        soloEsq.x = 0;
        soloEsq.y = 0;

        soloDir1 = new createjs.Bitmap('data/mapa/predios/fase2/soloDir1.png');
        soloDir1.x = 0;
        soloDir1.y = 0;

        soloEsq1 = new createjs.Bitmap('data/mapa/predios/fase2/soloEsq1.png');
        soloEsq1.x = 0;
        soloEsq1.y = 0;

        soloDir2 = new createjs.Bitmap('data/mapa/predios/fase2/soloDir2.png');
        soloDir2.x = 0;
        soloDir2.y = 0;

        soloEsq2 = new createjs.Bitmap('data/mapa/predios/fase2/soloEsq2.png');
        soloEsq2.x = 0;
        soloEsq2.y = 0;

        soloDir3 = new createjs.Bitmap('data/mapa/predios/fase2/soloDir3.png');
        soloDir3.x = 0;
        soloDir3.y = 0;

        soloEsq3 = new createjs.Bitmap('data/mapa/predios/fase2/soloEsq3.png');
        soloEsq3.x = 0;
        soloEsq3.y = 0;

        soloDirBt = new createjs.Bitmap('data/mapa/predios/fase2/soloDirBt.png');
        soloDirBt.x = 0;
        soloDirBt.y = 0;

        soloEsqBt = new createjs.Bitmap('data/mapa/predios/fase2/soloEsqBt.png');
        soloEsqBt.x = 0;
        soloEsqBt.y = 0;

        soloDirConv = new createjs.Bitmap('data/mapa/predios/fase2/soloDirConv.png');
        soloDirConv.x = 0;
        soloDirConv.y = 0;

        soloEsqConv = new createjs.Bitmap('data/mapa/predios/fase2/soloEsqConv.png');
        soloEsqConv.x = 0;
        soloEsqConv.y = 0;

        caixaDir = new createjs.Bitmap('data/mapa/predios/fase2/interacaoFase2/caixaDir.png');
        caixaDir.x = 0;
        caixaDir.y = 0;

        caixaEsq = new createjs.Bitmap('data/mapa/predios/fase2/interacaoFase2/caixaEsq.png');
        caixaEsq.x = 0;
        caixaEsq.y = 0;

        btn_btDir = new createjs.Bitmap('data/mapa/predios/fase2/interacaoFase2/btn_btDir.png');
        btn_btDir.x = 0;
        btn_btDir.y = 0;
        btn_btDir.cursor = "pointer";

        btn_btEsq = new createjs.Bitmap('data/mapa/predios/fase2/interacaoFase2/btn_btEsq.png');
        btn_btEsq.x = 0;
        btn_btEsq.y = 0;
        btn_btEsq.cursor = "pointer";

        btn_convDir = new createjs.Bitmap('data/mapa/predios/fase2/interacaoFase2/btn_convDir.png');
        btn_convDir.x = 0;
        btn_convDir.y = 0;
        btn_convDir.cursor = "pointer";

        btn_convEsq = new createjs.Bitmap('data/mapa/predios/fase2/interacaoFase2/btn_convEsq.png');
        btn_convEsq.x = 0;
        btn_convEsq.y = 0;
        btn_convEsq.cursor = "pointer";

        btn_fecharDir = new createjs.Bitmap('data/mapa/predios/fase2/interacaoFase2/btn_fecharDir.png');
        btn_fecharDir.x = 0;
        btn_fecharDir.y = 0;
        btn_fecharDir.cursor = "pointer";

        btn_fecharEsq = new createjs.Bitmap('data/mapa/predios/fase2/interacaoFase2/btn_fecharEsq.png');
        btn_fecharEsq.x = 0;
        btn_fecharEsq.y = 0;
        btn_fecharEsq.cursor = "pointer";

    // Fase 3:

        fundoFase3 = new createjs.Bitmap('data/mapa/predios/fase3/fundoFase3.png');
        fundoFase3.x = 0;
        fundoFase3.y = 0;

        anima1 = new createjs.Bitmap('data/mapa/predios/fase3/anima1.png');
        anima1.x = 0;
        anima1.y = 0;

        anima2 = new createjs.Bitmap('data/mapa/predios/fase3/anima2.png');
        anima2.x = 0;
        anima2.y = 0;

        anima3 = new createjs.Bitmap('data/mapa/predios/fase3/anima3.png');
        anima3.x = 320;
        anima3.y = 220;

        anima4 = new createjs.Bitmap('data/mapa/predios/fase3/anima4.png');
        anima4.x = 665;
        anima4.y = 235;

        anima5 = new createjs.Bitmap('data/mapa/predios/fase3/anima5.png');
        anima5.x = 530;
        anima5.y = 345;

        maq1 = new createjs.Bitmap('data/mapa/predios/fase3/maq1.png');
        maq1.x = 0;
        maq1.y = 0;

        maq2 = new createjs.Bitmap('data/mapa/predios/fase3/maq2.png');
        maq2.x = 0;
        maq2.y = 0;

        maq3 = new createjs.Bitmap('data/mapa/predios/fase3/maq3.png');
        maq3.x = 0;
        maq3.y = 0;

        maq3b = new createjs.Bitmap('data/mapa/predios/fase3/maq3b.png');
        maq3b.x = 0;
        maq3b.y = 0;

        maq4 = new createjs.Bitmap('data/mapa/predios/fase3/maq4.png');
        maq4.x = 0;
        maq4.y = 0;

        maq5 = new createjs.Bitmap('data/mapa/predios/fase3/maq5.png');
        maq5.x = 0;
        maq5.y = 0;

        maq5b = new createjs.Bitmap('data/mapa/predios/fase3/maq5b.png');
        maq5b.x = 0;
        maq5b.y = 0;

        est1 = new createjs.Bitmap('data/mapa/predios/fase3/est1.png');
        est1.x = 0;
        est1.y = 0;

        est2 = new createjs.Bitmap('data/mapa/predios/fase3/est2.png');
        est2.x = 0;
        est2.y = 0;

        est3 = new createjs.Bitmap('data/mapa/predios/fase3/est3.png');
        est3.x = 0;
        est3.y = 0;

        est4 = new createjs.Bitmap('data/mapa/predios/fase3/est4.png');
        est4.x = 0;
        est4.y = 0;

    // Fase 4

        fundoFase4 = new createjs.Bitmap('data/mapa/predios/fase4/fundoFase4.png');
        fundoFase4.x = 0;
        fundoFase4.y = 0;
        fundoFase4.alpha = 0;

    // Outros elementos (Botões, telas, etc...):

        escurecer = new createjs.Bitmap('data/PlaceHolder/fundoTeste.png')
        escurecer.x = 0;
        escurecer.y = 0;
        escurecer.visible = false;

        avancarBotao2 = new createjs.Bitmap('data/bt/bt_avancar.png');
        avancarBotao2.scaleX = 0.7;
        avancarBotao2.scaleY = 0.7;
        avancarBotao2.x = 680;
        avancarBotao2.y = 530;
        avancarBotao2.cursor = "pointer";
        avancarBotao2.visible = false;

        passarFalaBt = new createjs.Bitmap('data/bt/bt_avancar.png');
        passarFalaBt.scaleX = 0.7;
        passarFalaBt.scaleY = 0.7;
        passarFalaBt.x = 680;
        passarFalaBt.y = 530;
        passarFalaBt.cursor = "pointer";
        passarFalaBt.visible = false;

        fecharBotao = new createjs.Bitmap('data/bt/bt_fechar.png');
        fecharBotao.scaleX = 0.7;
        fecharBotao.scaleY = 0.7;
        fecharBotao.x = 705;
        fecharBotao.y = 70;
        fecharBotao.cursor = "pointer";
        fecharBotao.visible = false;

        continuarBotao = new createjs.Bitmap('data/bt/continuarBt.png')
        continuarBotao.x = 680;
        continuarBotao.y = 530;
        continuarBotao.scaleX = 0.7;
        continuarBotao.scaleY = 0.7;
        continuarBotao.cursor = "pointer";
        continuarBotao.visible = false;

        caixaGarota = new createjs.Bitmap('data/caixaDialogo/caixaGarota.png')
        caixaGarota.x = 0;
        caixaGarota.y = 0;
        caixaGarota.visible = false;

        caixaGaroto = new createjs.Bitmap('data/caixaDialogo/caixaGaroto.png')
        caixaGaroto.x = 0;
        caixaGaroto.y = 0;
        caixaGaroto.visible = false;

        caixaDoutora = new createjs.Bitmap('data/caixaDialogo/caixaDoutora.png')
        caixaDoutora.x = 0;
        caixaDoutora.y = 0;
        caixaDoutora.visible = false;

        vcSabiaBt = new createjs.Bitmap("data/bt/vcSabiaBt.png")
        vcSabiaBt.x = 0;
        vcSabiaBt.y = 0;
        vcSabiaBt.visible = false;
        vcSabiaBt.cursor = "pointer";
        vcSabiaBt.addEventListener("click", voceSabia);

        badgeBt = new createjs.Bitmap("data/bt/badgeBt.png")
        badgeBt.x = 0;
        badgeBt.y = 0;
        badgeBt.visible = false;
        badgeBt.cursor = "pointer";
        badgeBt.addEventListener("click", badgesAberta);

    // Voce sabia

        fechaSabia = new createjs.Bitmap("data/voceSabia/fechaSabia.png")
        fechaSabia.x = 0;
        fechaSabia.y = 0;
        fechaSabia.cursor = "pointer";
        fechaSabia.addEventListener("click", function(){voceSabiaContainer.visible = false;});

        livroLiso = new createjs.Bitmap("data/voceSabia/livroLiso.png")
        livroLiso.x = 0;
        livroLiso.y = 0;

        passaSabia = new createjs.Bitmap("data/voceSabia/passaSabia.png")
        passaSabia.x = 0;
        passaSabia.y = 0;
        passaSabia.cursor = "pointer";
        passaSabia.addEventListener("click", passaVcSabia);

        voltaSabia = new createjs.Bitmap("data/voceSabia/voltaSabia.png")
        voltaSabia.x = 0;
        voltaSabia.y = 0;
        voltaSabia.cursor = "pointer";
        voltaSabia.addEventListener("click", voltaVcSabia);

        sabia1 = new createjs.Bitmap("data/voceSabia/sabia1.png")
        sabia1.x = 0;
        sabia1.y = 0;

        sabia2 = new createjs.Bitmap("data/voceSabia/sabia2.png")
        sabia2.x = 0;
        sabia2.y = 0;

        sabia3 = new createjs.Bitmap("data/voceSabia/sabia3.png")
        sabia3.x = 0;
        sabia3.y = 0;

        sabia4 = new createjs.Bitmap("data/voceSabia/sabia4.png")
        sabia4.x = 0;
        sabia4.y = 0;

        sabia5 = new createjs.Bitmap("data/voceSabia/sabia5.png")
        sabia5.x = 0;
        sabia5.y = 0;

        sabia6 = new createjs.Bitmap("data/voceSabia/sabia6.png")
        sabia6.x = 0;
        sabia6.y = 0;

        sabia7 = new createjs.Bitmap("data/voceSabia/sabia7.png")
        sabia7.x = 0;
        sabia7.y = 0;

        sabia8 = new createjs.Bitmap("data/voceSabia/sabia8.png")
        sabia8.x = 0;
        sabia8.y = 0;

        sabia9 = new createjs.Bitmap("data/voceSabia/sabia9.png")
        sabia9.x = 0;
        sabia9.y = 0;  

        sabia10 = new createjs.Bitmap("data/voceSabia/sabia10.png")
        sabia10.x = 0;
        sabia10.y = 0; 

        sabia11 = new createjs.Bitmap("data/voceSabia/sabia11.png")
        sabia11.x = 0;
        sabia11.y = 0; 

        sabia12 = new createjs.Bitmap("data/voceSabia/sabia12.png")
        sabia12.x = 0;
        sabia12.y = 0; 

        sabia13 = new createjs.Bitmap("data/voceSabia/sabia13.png")
        sabia13.x = 0;
        sabia13.y = 0;      

        sabia14 = new createjs.Bitmap("data/voceSabia/sabia14.png")
        sabia14.x = 0;
        sabia14.y = 0; 

    // Badges:
        fechaBadges = new createjs.Bitmap("data/badges/fechaBadges.png")
        fechaBadges.x = 0;
        fechaBadges.y = 0;
        fechaBadges.cursor = "pointer";
        fechaBadges.addEventListener("click", function(){badgesContainer.visible = false;});

        badge1 = new createjs.Bitmap("data/badges/badge1.png")
        badge1.x = 0;
        badge1.y = 0;
        badge1.visible = false;

        badge1pkt = new createjs.Bitmap("data/badges/badge1pkt.png")
        badge1pkt.x = 0;
        badge1pkt.y = 0;

        badge2 = new createjs.Bitmap("data/badges/badge2.png")
        badge2.x = 0;
        badge2.y = 0;
        badge2.visible = false;

        badge2pkt = new createjs.Bitmap("data/badges/badge2pkt.png")
        badge2pkt.x = 0;
        badge2pkt.y = 0;

        badge3 = new createjs.Bitmap("data/badges/badge3.png")
        badge3.x = 0;
        badge3.y = 0;
        badge3.visible = false;

        badge3pkt = new createjs.Bitmap("data/badges/badge3pkt.png")
        badge3pkt.x = 0;
        badge3pkt.y = 0;

        badge4 = new createjs.Bitmap("data/badges/badge4.png")
        badge4.x = 0;
        badge4.y = 0;
        badge4.visible = false;

        badge4pkt = new createjs.Bitmap("data/badges/badge4pkt.png")
        badge4pkt.x = 0;
        badge4pkt.y = 0;

        badge5 = new createjs.Bitmap("data/badges/badge5.png")
        badge5.x = 0;
        badge5.y = 0;
        badge5.visible = false;

        badge5pkt = new createjs.Bitmap("data/badges/badge5pkt.png")
        badge5pkt.x = 0;
        badge5pkt.y = 0;

        caixaBadge = new createjs.Bitmap("data/badges/caixaBadge.png")
        caixaBadge.x = 0;
        caixaBadge.y = 0;

////////////////////////////////////////////////////////////////////

////////////////// CONTAINERS PARA ORGANIZAÇÃO /////////////////////

 // Containers para facilitar a organização e adicionando tudo ao palco:

     var menuContainer = new createjs.Container();
     menuContainer.addChild(fundoMenu, jogarBotao, fundoSobre, clickInfo, info1, info2, info3, infoBt1, infoBt2, infoBt3);
     menuContainer.visible = false;

     var mapaContainer = new createjs.Container();
     mapaContainer.addChild(fundoMapa, predioLab, predioFazendaBloqueado, predioFabricaBloqueado, predioSupermercadoBloqueado, predioFazenda, predioFabrica,
      predioSupermercado, predioLabCompleto, predioFazendaCompleto, predioFabricaCompleto, predioSupermercadoCompleto);
     mapaContainer.visible = false;

     var selecPersonContainer = new createjs.Container();
     selecPersonContainer.addChild(fundoSelecao, garota, garoto);
     selecPersonContainer.visible = false;

     var trocaRoupaContainer = new createjs.Container();
     trocaRoupaContainer.addChild(fundoRoupas, armario, jalecoArmario, corpoGarota, corpoGaroto, luvasVestir, jalecoVestir, luvasArmario, oculosArmario, toucaArmario,
                                 cabecaGarota, cabecaGarotaCTouca, cabecaGaroto, cabecaGarotoCTouca, oculosVestir);
     trocaRoupaContainer.visible = false;

     var fase1Container = new createjs.Container();
     fase1Container.addChild(backgroundFase1, fundoFase1, geladeiraFase, cFluxoFase, cVegetacaoFase, termocicladorFase, biobalisticaFase,
                             eletroforeseFase, bancadaFase, instrumentosFase, geladeiraFaseBrilho, cFluxoFaseBrilho, cVegetacaoFaseBrilho, bancadaFaseBrilho, termocicladorFaseBrilho, biobalisticaFaseBrilho, eletroforeseFaseBrilho);
     fase1Container.visible = false;

     var geladeira1Container = new createjs.Container();
     geladeira1Container.addChild(placaPetri, placaMicropart, solucaoGene, solucExtrDna, solucAmplDna, placaPlDePetri, placaPlMicropart, placaGene, placaExtrDna, placaAmplDna);
     geladeira1Container.visible = false;

     var cVegetacao1Container = new createjs.Container();
     cVegetacao1Container.addChild(cVegetacaoAberta, cVegetacaoVasos, cVegetacaoPlantCFol);
     cVegetacao1Container.visible = false;

     var cVegetacao2Container = new createjs.Container();
     cVegetacao2Container.addChild(cVegetacaoFundo2, pote, pote1, pote2, pote3, pote4, pote5, pote6, pote7);
     cVegetacao2Container.visible = false;

     var cFluxoContainer = new createjs.Container();
     cFluxoContainer.addChild(camaraFundo, corte, corte1, corte2, corte3, corte4, placa, meioCultura, meioCulturaPlanta, lamina, pinca, pincaPlanta);
     cFluxoContainer.visible = false;

     var bancada1Container = new createjs.Container();
     bancada1Container.addChild(placaMicropartBanc, solucaoGeneBanc, erlen1, erlen2, erlen3, erlen4, erlen5, erlen6, erlen7, erlen8);
     bancada1Container.visible = false;

     var bancada2Container = new createjs.Container();
     bancada2Container.addChild(almofariz, almofariz1, almofariz2, baseFolhas, folhas, pistilo);
     bancada2Container.visible = false;

     var bancada3Container = new createjs.Container();
     bancada3Container.addChild(bastaoVidro, bastaoFitas, bastaoSFitas, micropipeta1, micropipeta2, micropipeta3, micropipeta4, microtubulo1, microtubulo2, microtubulo3, microtubulo4, solucDnaBanc, bequer, bequer1, bequer2, bequer3, bequer4, bequer5, bequer6, bequer7);
     bancada3Container.visible = false;

     var biobalisticaContainer = new createjs.Container();
     biobalisticaContainer.addChild(biobalisticaFundo, biobalisticaMaquina, biobalisticaMaquinaCheia, botaoLigaBiobalistica, botaoLigaBiobalisticaPress, portaAberta,
                                    biobalisticaPlacaExpl, solucBiobalistica, biobalisticaPlacaExplPeq, biobalisticaEfeito, placaPlanta, tuboSemFolha, tuboEnsaio, portaFechada);
     biobalisticaContainer.visible = false;

     var fase2CaixaDirContainer = new createjs.Container();
     fase2CaixaDirContainer.addChild(caixaDir, btn_btDir, btn_convDir, btn_fecharDir);
     fase2CaixaDirContainer.visible = false;

     var fase2CaixaEsqContainer = new createjs.Container();
     fase2CaixaEsqContainer.addChild(caixaEsq, btn_btEsq, btn_convEsq, btn_fecharEsq);
     fase2CaixaEsqContainer.visible = false;

     var termocicladorContainer = new createjs.Container();
     termocicladorContainer.addChild(termocicladorFundo, termociclador, termocicladorTampa, botaoLigarTermo, botaoLigarTermoPress, botaoAbrirTermo,
      botaoAbrirTermoPress, microtubuloTermo);
     termocicladorContainer.visible = false;

     var eletroforeseContainer = new createjs.Container();
     eletroforeseContainer.addChild(eletroforeseFundo, microtubulosVazios, microtubulosCheios, eletroforese1, eletroforese2, eletroforese3,
                                    eletroforese4, pente, contaGotaCheio, contaGotaVazio, gotaGene, eletroforese5, gelSeparado, gelFixo);
     eletroforeseContainer.visible = false;

      var eletroZoomContainer = new createjs.Container();
     eletroZoomContainer.addChild(eletroZoom, eletroZoom1, eletroZoom2, positivo, negativo);
     eletroZoomContainer.visible = false;

     var fase2Container = new createjs.Container();
     fase2Container.addChild(fundoFase2, soloDir, soloEsq, soloDir1, soloEsq1, soloDir2, soloEsq2, soloDir3, soloEsq3, soloDirBt, soloEsqBt, soloDirConv,
                             soloEsqConv);
     fase2Container.visible = false;

     var fase3Container = new createjs.Container();
     fase3Container.addChild(fundoFase3, maq2, est1, maq1, anima1, anima2, est2, maq3b, maq3, est3, maq4, est4, maq5, maq5b, anima3, anima4, anima5);
     fase3Container.visible = false;

     var voceSabiaContainer = new createjs.Container();
     voceSabiaContainer.addChild(livroLiso, sabia1, sabia2, sabia3, sabia4, sabia5, sabia6, sabia7, sabia8, sabia9, sabia10, sabia11, sabia12, sabia13, sabia14, fechaSabia, passaSabia, voltaSabia);
     voceSabiaContainer.visible = false;

     var badgesContainer = new createjs.Container();
     badgesContainer.addChild(caixaBadge, badge1pkt, badge2pkt, badge3pkt, badge4pkt, badge5pkt, fechaBadges);
     badgesContainer.visible = false;


    stage.addChild(escurecer, bancadaFundo, menuContainer, mapaContainer, selecPersonContainer, garotaBrilho, garotoBrilho, trocaRoupaContainer,
        fase1Container, geladeiraAberta, geladeira1Container, cVegetacao1Container, cFluxoContainer, bancada1Container, 
        bancada2Container, bancada3Container, biobalisticaContainer, fase2Container, fase2CaixaDirContainer,
        fase2CaixaEsqContainer, termocicladorContainer, eletroforeseContainer, eletroZoomContainer, raioX, cVegetacao2Container, cenaLab, cenaFazenda, cenaCaminhao, fase3Container, fundoFase4,
        caixaGarota, caixaGaroto, caixaDoutora, avancarBotao2, passarFalaBt, vcSabiaBt, badgeBt, fecharBotao, continuarBotao);

////////////////////////////////////////////////////////////////////

////////////////// VARIÁVEIS E CRIAÇÃO TICKER //////////////////////
   //Variáveis:

   var escolhaPersonagem;

   var progresso = 0;

   var contador = 0;

   var plantarDir = 0;

   var plantarEsq = 0;

   var liberaMapa = 0;

   var progressoBiobalistica = 0;

   var progVcSabia = 0;

   var progBadges = 0;

   var limiteVcSabia = 0;

   var holder;
 
   var jalecoReal = false;
   var luvasReal = false;
   var toucaReal = false;
   var oculosReal = false;

   // Ticker update:

    createjs.Ticker.addEventListener("tick",function(){
        stage.update();
    });

////////////////////////////////////////////////////////////////////

//////////////////// ÍNICIO DO DAS FUNÇÕES /////////////////////////

    function menu() {
     menuContainer.visible = true;
     
     selecPersonContainer.visible = true;
     selecPersonContainer.alpha = 0;

     clickInfo.alpha = 0;

     info1.alpha = 0;
     info2.alpha = 0;
     info3.alpha = 0;
     infoBt1.alpha = 0;
     infoBt2.alpha = 0;
     infoBt3.alpha = 0;

     createjs.Tween.get(fundoSobre).to({y:540}, 500);

     jogarBotao.addEventListener("click", selecaoPersonagem);

     fundoSobre.cursor = "pointer";
     fundoSobre.addEventListener("click", ativaSobre);
    };

    function voltaMenu() {
        phaseoutin(fundoFase4, menuContainer);
        escolhaPersonagem = 0;

        progresso = 0;

        contador = 0;

        plantarDir = 0;

        plantarEsq = 0;

        liberaMapa = 0;

        progressoBiobalistica = 0;

        progVcSabia = 0;

        progBadges = 0;

        limiteVcSabia = 0;

        holder = 0;
    
        jalecoReal = false;
        luvasReal = false;
        toucaReal = false;
        oculosReal = false;

        menu();
    }

    function ativaSobre(){
        fundoSobre.cursor = "default";
        clickInfo.cursor = "pointer";
        clickInfo.visible = true;

        createjs.Tween.get(clickInfo).wait(500).to({alpha:1});
        createjs.Tween.get(infoBt1).wait(500).to({alpha:1});
        createjs.Tween.get(infoBt2).wait(500).to({alpha:1});
        createjs.Tween.get(infoBt3).wait(500).to({alpha:1});
        createjs.Tween.get(fundoSobre).to({y:0}, 500);

        infoBt1.addEventListener("mouseover", function () {createjs.Tween.get(info1).to({alpha:1}, 200)});
        infoBt1.addEventListener("mouseout", function () {createjs.Tween.get(info1).to({alpha:0}, 200)});

        infoBt2.addEventListener("mouseover", function () {createjs.Tween.get(info2).to({alpha:1}, 200)});
        infoBt2.addEventListener("mouseout", function () {createjs.Tween.get(info2).to({alpha:0}, 200)});

        infoBt3.addEventListener("mouseover", function () {createjs.Tween.get(info3).to({alpha:1}, 200)});
        infoBt3.addEventListener("mouseout", function () {createjs.Tween.get(info3).to({alpha:0}, 200)});

        clickInfo.addEventListener("click", menu);
    }

    function phaseoutin(targetobj1,targetobj2){ 
      createjs.Tween.get(targetobj1).to({alpha:0},500).call(function(){
      createjs.Tween.get(targetobj2).to({alpha:1},500);})
    }

    function glow(targetobj1) {
        createjs.Tween.get(targetobj1).to({alpha:1}, 500).to({alpha:0}, 500).to({alpha:1}, 500).to({alpha:0}, 500);
    }

    function selecaoPersonagem() {
        phaseoutin(menuContainer,selecPersonContainer);

        garota.addEventListener("mouseover", function () {createjs.Tween.get(garotaBrilho).to({alpha:1}, 200)});
        garota.addEventListener("mouseout", function () {createjs.Tween.get(garotaBrilho).to({alpha:0}, 200)});
        garota.addEventListener("click", function(){escolher(1)});
        garotaBrilho.addEventListener("click", function(){escolher(1)});

        garoto.addEventListener("mouseover", function () {createjs.Tween.get(garotoBrilho).to({alpha:1}, 200)});
        garoto.addEventListener("mouseout", function () {createjs.Tween.get(garotoBrilho).to({alpha:0}, 200)});
        garoto.addEventListener("click", function(){escolher(2)});
        garotoBrilho.addEventListener("click", function(){escolher(2)});       
    };

    function escolher(numero){
        escolhaPersonagem = numero;
        if (numero == 1) {
            holder = caixaGarota;
            caixaGarota = caixaGaroto;
            caixaGaroto = holder;
        }
        cena1();
    };

    function mapa() {
        contaTexto = 0;
        caixaGarota.visible = false;
        caixaGaroto.visible = false;
        passarFalaBt.visible = false;
        mapaContainer.visible = true;

        vcSabiaBt.visible = true;
        vcSabiaBt.x = 740;
        vcSabiaBt.y = 15;
        vcSabiaBt.alpha = 0;
        createjs.Tween.get(vcSabiaBt).wait(500).to({alpha:1},500)

        badgeBt.visible = true;
        badgeBt.x = 680;
        badgeBt.y = 15;
        badgeBt.alpha = 0;
        createjs.Tween.get(badgeBt).wait(500).to({alpha:1},500)

        switch(liberaMapa) {
        case 0:
            predioFazenda.visible = false;
            predioFabrica.visible = false;
            predioSupermercado.visible = false;
            predioLabCompleto.visible = false;
            predioFazendaCompleto.visible = false;
            predioFabricaCompleto.visible = false;
            predioSupermercadoCompleto.visible = false;

            predioLab.cursor = "pointer";
            predioLab.addEventListener("click", function(){cena2()});
        break;
        case 1:
            falaMapa2();
            predioLab.visible = false;
            predioFazendaBloqueado.visible = false;
            predioFazenda.visible = true;
            predioFabrica.visible = false;
            predioSupermercado.visible = false;
            predioLabCompleto.visible = true;
            predioFazendaCompleto.visible = false;
            predioFabricaCompleto.visible = false;
            predioSupermercadoCompleto.visible = false;

            predioLabCompleto.cursor = "pointer";
            predioFazenda.cursor = "pointer";
            predioFazenda.addEventListener("click", function(){cenaFase2()})
        break;
        case 2:
            falaMapa3();
            predioLab.visible = false;
            predioFazendaBloqueado.visible = false;
            predioFabricaBloqueado.visible = false;
            predioFazenda.visible = false;
            predioFabrica.visible = true;
            predioSupermercado.visible = false;
            predioLabCompleto.visible = true;
            predioFazendaCompleto.visible = true;
            predioFabricaCompleto.visible = false;
            predioSupermercadoCompleto.visible = false;

            predioFazendaCompleto.cursor = "pointer";
            predioFabrica.cursor = "pointer";
            predioFabrica.addEventListener("click", function(){cena17()})
        break;
        case 3:
            falaMapa4();
            predioLab.visible = false;
            predioFazendaBloqueado.visible = false;
            predioFabricaBloqueado.visible = false;
            predioSupermercadoBloqueado.visible = false;
            predioFazenda.visible = false;
            predioFabrica.visible = false;
            predioSupermercado.visible = true;
            predioLabCompleto.visible = true;
            predioFazendaCompleto.visible = true;
            predioFabricaCompleto.visible = true;
            predioSupermercadoCompleto.visible = false;

            predioFabricaCompleto.cursor = "pointer";
            predioSupermercado.cursor = "pointer";
            predioSupermercado.addEventListener("click", function(){fase4()})
        break;
        case 4:
            predioLab.visible = false;
            predioFazendaBloqueado.visible = false;
            predioFabricaBloqueado.visible = false;
            predioSupermercadoBloqueado.visible = false;
            predioFazenda.visible = false;
            predioFabrica.visible = false;
            predioSupermercado.visible = false;
            predioLabCompleto.visible = true;
            predioFazendaCompleto.visible = true;
            predioFabricaCompleto.visible = true;
            predioSupermercadoCompleto.visible = true;

            predioSupermercadoCompleto.cursor = "pointer";
        break;
        };
    };

    function voltaMapa() {
        progresso = 0;
        liberaMapa++;
        mapaContainer.visible = true;
        mapaContainer.alpha = 0;
        fase1Container.visible = false;
        phaseoutin(cenaLab, mapaContainer);
        fase2Container.visible = false;
        phaseoutin(cenaCaminhao, mapaContainer);
        phaseoutin(fase3Container, mapaContainer);
        mapa();
    }

   function trocaDeRoupa(){

        contaTexto = 0;
        caixaGarota.visible = false;
        caixaGaroto.visible = false;
        passarFalaBt.visible = false;

        mapaContainer.visible = false;
        vcSabiaBt.visible = false;
        badgeBt.visible = false;
        trocaRoupaContainer.visible = true;

        armario.visible = true;
        jalecoArmario.visible = true;
        luvasArmario.visible = true;
        oculosArmario.visible = true;
        toucaArmario.visible = true;
        jalecoVestir.visible = false;
        luvasVestir.visible = false;
        oculosVestir.visible = false;
        cabecaGarota.visible = false;
        corpoGarota.visible = false;
        cabecaGaroto.visible = false;
        corpoGaroto.visible = false;
        cabecaGarotaCTouca.visible = false;
        cabecaGarotoCTouca.visible = false;

        if (escolhaPersonagem == 1) {
            cabecaGarota.visible = true;
            corpoGarota.visible = true;
        } else if (escolhaPersonagem == 2) {
            cabecaGaroto.visible = true;
            corpoGaroto.visible = true;
        };

        jalecoArmario.addEventListener("click", trocaJaleco);
        luvasArmario.addEventListener("click", trocaLuva);
        oculosArmario.addEventListener("click", trocaOculos);
        toucaArmario.addEventListener("click", trocaTouca);

        function trocaJaleco() {
            jalecoReal = true;

            jalecoVestir.visible = true;

            jalecoArmario.visible = false;

            falaJaleco();
            testaRoupas();
        };

        function trocaLuva() {
            luvasReal = true;

            luvasVestir.visible = true;

            luvasArmario.visible = false;

            falaLuvas();
            testaRoupas();
        };

        function trocaOculos() {
            oculosReal = true;

            oculosVestir.visible = true;

            oculosArmario.visible = false;

            falaOculos();
            testaRoupas();
        };

        function trocaTouca() {
            toucaReal = true;

            if (escolhaPersonagem == 1) {
                cabecaGarota.visible = false;
                cabecaGarotaCTouca.visible = true;
         } else if (escolhaPersonagem == 2) {
                cabecaGaroto.visible = false;
                cabecaGarotoCTouca.visible = true;
         };

         toucaArmario.visible = false;

            falaTouca();
            testaRoupas();
        };

    };

    function testaRoupas() {
        if (jalecoReal == true && luvasReal == true && toucaReal == true && oculosReal == true) {
                passarFalaBt.visible = true;
                passarFalaBt.removeEventListener("click", avancaFala2);
                passarFalaBt.addEventListener("click", falaRoupas);
        };
    }

    //Fase 1:
        function fase1() {
            contaTexto = 0;
            caixaGarota.visible = false;
            caixaGaroto.visible = false;
            passarFalaBt.visible = false;
            texto57.visible = false;

            fase1Container.visible = true;

            vcSabiaBt.visible = true;
            vcSabiaBt.x = 740;
            vcSabiaBt.y = 15;

            badgeBt.visible = true;
            badgeBt.x = 680;
            badgeBt.y = 15;

         switch(progresso) {
            case 0:
                glow(geladeiraFaseBrilho);
                geladeiraFase.cursor = "pointer";
                geladeiraFase.addEventListener("click", geladeiraAberta1);
            break;
            case 1:
                glow(cVegetacaoFaseBrilho);
                geladeiraFase.cursor = "default";
                geladeiraFase.removeEventListener("click", geladeiraAberta1);
                cVegetacaoFase.cursor = "pointer";
                cVegetacaoFase.addEventListener("click", cVegetacaoAberta1);
            break;
            case 2:
                glow(cFluxoFaseBrilho);
                cVegetacaoFase.cursor = "default";
                cVegetacaoFase.removeEventListener("click", cVegetacaoAberta1);
                cFluxoFase.cursor = "pointer";
                cFluxoFase.addEventListener("click", cena4);
            break;
            case 3:
                glow(geladeiraFaseBrilho);
                cFluxoFase.cursor = "default";
                cFluxoFase.removeEventListener("click", cena4);
                geladeiraFase.cursor = "pointer";
                geladeiraFase.addEventListener("click", geladeiraAberta2);
            break;
            case 4:
                glow(bancadaFaseBrilho);
                geladeiraFase.cursor = "default";
                geladeiraFase.removeEventListener("click", geladeiraAberta2);
                bancadaFase.cursor = "pointer";
                bancadaFase.addEventListener("click", falaMistura);
            break;
            case 5:
                glow(biobalisticaFaseBrilho);
                bancadaFase.cursor = "default";
                bancadaFase.removeEventListener("click", falaMistura);
                biobalisticaFase.cursor = "pointer";
                biobalisticaFase.addEventListener("click", cena7);
            break;
            case 6:
                glow(bancadaFaseBrilho);
                biobalisticaFase.cursor = "default";
                biobalisticaFase.removeEventListener("click", cena7);
                bancadaFase.cursor = "pointer";
                bancadaFase.addEventListener("click", falaTriture);
            break;
            case 7:
                glow(geladeiraFaseBrilho);
                bancadaFase.cursor = "default";
                bancadaFase.removeEventListener("click", falaTriture);
                geladeiraFase.cursor = "pointer";
                geladeiraFase.addEventListener("click", geladeiraAberta3);
            break;
            case 8:
                glow(bancadaFaseBrilho);
                geladeiraFase.cursor = "default";
                geladeiraFase.removeEventListener("click", geladeiraAberta3);
                bancadaFase.cursor = "pointer";
                bancadaFase.addEventListener("click", cena10);
            break;
            case 9:
                glow(termocicladorFaseBrilho);
                bancadaFase.cursor = "default";
                bancadaFase.removeEventListener("click", cena10);
                termocicladorFase.cursor = "pointer";
                termocicladorFase.addEventListener("click", cena11);
            break;
            case 10:
                glow(eletroforeseFaseBrilho);
                termocicladorFase.cursor = "default";
                termocicladorFase.removeEventListener("click", cena11);
                eletroforeseFase.cursor = "pointer";
                eletroforeseFase.addEventListener("click", cena12);
            break;
            case 11:
                glow(termocicladorFaseBrilho);
                eletroforeseFase.cursor = "default";
                eletroforeseFase.removeEventListener("click", cena12);
                termocicladorFase.cursor = "pointer";
                termocicladorFase.addEventListener("click", termocicladorAberto2);
            break;
            case 12:
                glow(eletroforeseFaseBrilho);
                termocicladorFase.cursor = "default";
                termocicladorFase.removeEventListener("click", termocicladorAberto2);
                eletroforeseFase.cursor = "pointer";
                eletroforeseFase.addEventListener("click", eletroforeseAberta2);
            break;
            case 13:
                contador = 0;
                glow(cVegetacaoFaseBrilho);
                eletroforeseFase.cursor = "default";
                eletroforeseFase.removeEventListener("click", eletroforeseAberta2);
                cVegetacaoFase.cursor = "pointer";
                cVegetacaoFase.addEventListener("click", cVegetacaoAberta2);
            break;

        }; 

        };

        function voltarfase1() {
            progresso++;
            console.log(progresso);
            contador = 0;
            escurecer.visible = false;
            geladeiraAberta.visible = false;
            fecharBotao.visible = false;
            geladeira1Container.visible = false;
            cVegetacao1Container.visible = false;
            cFluxoContainer.visible = false;
            bancada1Container.visible = false;
            biobalisticaContainer.visible = false;
            bancada2Container.visible = false;
            bancada3Container.visible = false;
            termocicladorContainer.visible = false;
            avancarBotao2.visible = false;
            eletroforeseContainer.visible = false;
            cVegetacao2Container.visible = false;
            bancadaFundo.visible = false;
            raioX.visible = false;
            continuarBotao.visible = false;
            fase1();
        };

        function geladeiraAberta1(){
            fase1Container.visible = false;
            geladeira1Container.visible = true;
            geladeiraAberta.visible = true;
            placaPetri.addEventListener("mouseover", function () {createjs.Tween.get(placaPlDePetri).to({alpha:1}, 200)});
            placaPetri.addEventListener("mouseout", function () {createjs.Tween.get(placaPlDePetri).to({alpha:0}, 200)});
            placaMicropart.addEventListener("mouseover", function () {createjs.Tween.get(placaPlMicropart).to({alpha:1}, 200)});
            placaMicropart.addEventListener("mouseout", function () {createjs.Tween.get(placaPlMicropart).to({alpha:0}, 200)});
            solucAmplDna.addEventListener("mouseover", function () {createjs.Tween.get(placaAmplDna).to({alpha:1}, 200)});
            solucAmplDna.addEventListener("mouseout", function () {createjs.Tween.get(placaAmplDna).to({alpha:0}, 200)});
            solucExtrDna.addEventListener("mouseover", function () {createjs.Tween.get(placaExtrDna).to({alpha:1}, 200)});
            solucExtrDna.addEventListener("mouseout", function () {createjs.Tween.get(placaExtrDna).to({alpha:0}, 200)});
            solucaoGene.addEventListener("mouseover", function () {createjs.Tween.get(placaGene).to({alpha:1}, 200)});
            solucaoGene.addEventListener("mouseout", function () {createjs.Tween.get(placaGene).to({alpha:0}, 200)});
            placaPetri.addEventListener("click", pegarPlacaPetri);
        };

        function pegarPlacaPetri(){
            placaPetri.visible = false;
            progVcSabia=1;
            limiteVcSabia++;
            avisaSabia();
            falaPlacaPetri();
        };

        function cVegetacaoAberta1(){
            fase1Container.visible = false;
            cVegetacao1Container.visible = true;
            cVegetacaoPlantCFol.addEventListener("click", pegarExplante);
        };

        function pegarExplante(){
            cVegetacaoPlantCFol.visible = false;
            falaFolhas();
        };

        function camFluxoAberta() {
            fase1Container.visible = false;
            cFluxoContainer.visible = true;
            pinca.visible = false;
            pincaPlanta.visible = false;
            meioCulturaPlanta.visible = false;
            placa.visible = false;
            corte1.visible = false;
            corte2.visible = false;
            corte3.visible = false;
            corte4.visible = false;
            lamina.addEventListener("click", cortarFolhas);
            progVcSabia=2;
            limiteVcSabia++;
            avisaSabia();
        };

        function cortarFolhas() {
            if (contador == 0) {
                corte.visible = false;
                corte1.visible = true;
                contador++;
            } else if (contador == 1){
                corte1.visible = false;
                corte2.visible = true;
                contador++;
            } else if (contador == 2){
                corte2.visible = false;
                corte3.visible = true;
                contador++;
            } else if (contador == 3){
                corte3.visible = false;
                corte4.visible = true;
                contador++;
            } else {
                pincaFolhas();
            };
        };
        
        function pincaFolhas(){
            lamina.visible = false;
            pinca.visible = true;
            pinca.on("pressmove",function(evt) {
                        evt.currentTarget.y = evt.stageY-83;   

                        if (evt.currentTarget.y > 300) {
                            pinca.visible = false;
                            arrastarFolhas();
                        }
                    });

                    pinca.on("pressup", function(evt) {
                        evt.currentTarget.x = 500;
                        evt.currentTarget.y = 120; 
                 });
        };

        function arrastarFolhas(){
            pincaPlanta.visible = true;
            corte4.visible = false;
            placa.visible = true;
            pincaPlanta.on("pressmove",function(evt) {
                        evt.currentTarget.x = evt.stageX-140;   

                        if (evt.currentTarget.x < 240) {
                            pincaPlanta.visible = false;
                            ativaMeioCultura();
                        }
                    });

                    pincaPlanta.on("pressup", function(evt) {
                        evt.currentTarget.x = 500;
                        evt.currentTarget.y = 300; 
                 });
        }

        function ativaMeioCultura() {
            pincaPlanta.visible = false;
            meioCultura.visible = false;
            meioCulturaPlanta.visible = true;
            meioCulturaPlanta.cursor = "pointer";
            meioCulturaPlanta.addEventListener("click", falaMeioCultura);
        }

        function geladeiraAberta2() {
            fase1Container.visible = false;
            geladeira1Container.visible = true;
            geladeiraAberta.visible = true;
            placaMicropart.addEventListener("mouseover", function () {createjs.Tween.get(placaPlMicropart).to({alpha:1}, 200)});
            placaMicropart.addEventListener("mouseout", function () {createjs.Tween.get(placaPlMicropart).to({alpha:0}, 200)});
            solucAmplDna.addEventListener("mouseover", function () {createjs.Tween.get(placaAmplDna).to({alpha:1}, 200)});
            solucAmplDna.addEventListener("mouseout", function () {createjs.Tween.get(placaAmplDna).to({alpha:0}, 200)});
            solucExtrDna.addEventListener("mouseover", function () {createjs.Tween.get(placaExtrDna).to({alpha:1}, 200)});
            solucExtrDna.addEventListener("mouseout", function () {createjs.Tween.get(placaExtrDna).to({alpha:0}, 200)});
            solucaoGene.addEventListener("mouseover", function () {createjs.Tween.get(placaGene).to({alpha:1}, 200)});
            solucaoGene.addEventListener("mouseout", function () {createjs.Tween.get(placaGene).to({alpha:0}, 200)});
            placaMicropart.addEventListener("click", pegarPlacaMicropart);
            solucaoGene.addEventListener("click", pegarSolucao);
        };

        function pegarPlacaMicropart(){
            if (contador == 0) {
                placaMicropart.visible = false;
                contador++;
            } else {
                placaMicropart.visible = false;
                progVcSabia=3;
                limiteVcSabia++;
                avisaSabia();
                falaGela2();
            };
        };

        function pegarSolucao() {
            if (contador == 0) {
                solucaoGene.visible = false;
                contador++;
            } else {
                solucaoGene.visible = false;
                progVcSabia=3;
                limiteVcSabia++;
                avisaSabia();
                falaGela2();
            };
        }

        function bancadaAberta1() {
                fase1Container.visible = false;
                bancada1Container.visible = true;
                bancadaFundo.visible = true;

                caixaGarota.visible = false;
                caixaGaroto.visible = false;
                passarFalaBt.visible = false;

                erlen1.visible = true;
                erlen2.visible = false;
                erlen3.visible = false;
                erlen4.visible = true;
                erlen4.alpha = 0;
                erlen5.visible = true;
                erlen5.alpha = 0;
                erlen6.visible = true;
                erlen6.alpha = 0;
                erlen7.visible = true;
                erlen7.alpha = 0;
                erlen8.visible = true;
                erlen8.alpha = 0;
                placaMicropartBanc.visible = false;

                solucaoGeneBanc.on("pressmove",function(evt) {
                        evt.currentTarget.x = evt.stageX-62;   

                        if (evt.currentTarget.x > 350) {
                                solucaoGeneBanc.visible = false;
                                erlen1.visible = false;
                                erlen2.visible = true;
                                placaMicropartBanc.visible = true;
                        }
                    });

                    solucaoGeneBanc.on("pressup", function(evt) {
                        evt.currentTarget.x = 100;
                        evt.currentTarget.y = 360; 
                 });

                placaMicropartBanc.on("pressmove",function(evt) {
                        evt.currentTarget.x = evt.stageX-62;   

                        if (evt.currentTarget.x > 350) {
                                placaMicropartBanc.visible = false;
                                erlen2.visible = false;
                                erlen3.visible = true;
                                mexendo();
                        }
                    });

                    placaMicropartBanc.on("pressup", function(evt) {
                        evt.currentTarget.x = 100;
                        evt.currentTarget.y = 360; 
                 });
        }

        function mexendo() {
            createjs.Tween.get(erlen3).to({x:20},500).to({x:-20},500).to({x:20},500).to({x:-20},500).to({x:20},500).to({x:-20},500).to({x:20},500).to({x:-20},500).to({x:20},500);
            createjs.Tween.get(erlen4).to({x:20},500).to({x:-20},500).to({x:20},500).to({x:-20},500).to({x:20},500).to({x:-20},500).to({x:20},500).to({x:-20},500).to({x:20},500);
            createjs.Tween.get(erlen5).to({x:20},500).to({x:-20},500).to({x:20},500).to({x:-20},500).to({x:20},500).to({x:-20},500).to({x:20},500).to({x:-20},500).to({x:20},500);
            createjs.Tween.get(erlen6).to({x:20},500).to({x:-20},500).to({x:20},500).to({x:-20},500).to({x:20},500).to({x:-20},500).to({x:20},500).to({x:-20},500).to({x:20},500);
            createjs.Tween.get(erlen7).to({x:20},500).to({x:-20},500).to({x:20},500).to({x:-20},500).to({x:20},500).to({x:-20},500).to({x:20},500).to({x:-20},500).to({x:20},500);
            createjs.Tween.get(erlen8).to({x:20},500).to({x:-20},500).to({x:20},500).to({x:-20},500).to({x:20},500).to({x:-20},500).to({x:20},500).to({x:-20},500).to({x:20},500);
            createjs.Tween.get(erlen3).to({alpha:0},2000);
            createjs.Tween.get(erlen4).to({alpha:1},2000).to({alpha:0},2000);
            createjs.Tween.get(erlen5).wait(1000).to({alpha:1},2000).to({alpha:0},2000);
            createjs.Tween.get(erlen6).wait(2000).to({alpha:1},2000).to({alpha:0},2000);
            createjs.Tween.get(erlen7).wait(3000).to({alpha:1},2000).to({alpha:0},2000);
            createjs.Tween.get(erlen8).wait(4000).to({alpha:1},2000).call(function(){terminaBancada1()});
        }

        function terminaBancada1() {
            erlen8.cursor = "pointer";
            erlen8.addEventListener("click", cena6);
        }

        function biobalisticaAberta() {
            fase1Container.visible = false;
            biobalisticaContainer.visible = true;

            contaTexto = 0;
            caixaGarota.visible = false;
            caixaGaroto.visible = false;
            passarFalaBt.visible = false;

            if (progVcSabia != 4) {
                progVcSabia = 4;
                limiteVcSabia++;
                avisaSabia(); 
            } else if (progVcSabia == 4){};
            

            switch (progressoBiobalistica) {
                case 0:
                    botaoLigaBiobalisticaPress.visible = false;
                    portaFechada.visible = false;
                    biobalisticaPlacaExplPeq.visible = false;
                    biobalisticaEfeito.visible = false;
                    biobalisticaMaquinaCheia.visible = false;
                    biobalisticaPlacaExpl.visible = false;
                    placaPlanta.visible = true;
                    placaPlanta.alpha = 0;
                    tuboEnsaio.visible = false;
                    tuboSemFolha.visible = false;
                    solucBiobalistica.cursor = "pointer";

                    solucBiobalistica.on("pressmove",function(evt) {
                        evt.currentTarget.x = evt.stageX-22;
                        evt.currentTarget.y = evt.stageY-35;   

                        if (evt.currentTarget.x < 400 && evt.currentTarget.y > 120) {
                            solucBiobalistica.visible = false;
                            avanca();
                        }
                    });


                break;
                case 1:
                    botaoLigaBiobalisticaPress.visible = false;
                    portaFechada.visible = false;
                    biobalisticaPlacaExplPeq.visible = false;
                    biobalisticaEfeito.visible = false;
                    biobalisticaMaquina.visible = false;
                    biobalisticaMaquinaCheia.visible = true;
                    solucBiobalistica.visible = false;
                    biobalisticaPlacaExpl.visible = true;
                    biobalisticaPlacaExpl.cursor = "pointer";

                    biobalisticaPlacaExpl.on("pressmove",function(evt) {
                        evt.currentTarget.x = evt.stageX-73;
                        evt.currentTarget.y = evt.stageY-35;   

                        if (evt.currentTarget.x < 400 && evt.currentTarget.y > 200) {
                            biobalisticaPlacaExpl.visible = false;
                            avanca1();
                        }
                    });

                break;
                case 2:
                    botaoLigaBiobalisticaPress.visible = false;
                    portaFechada.visible = false;
                    biobalisticaPlacaExplPeq.visible = true;
                    biobalisticaEfeito.visible = false;
                    biobalisticaPlacaExpl.visible = false;
                    portaAberta.cursor = "pointer";
                    portaAberta.addEventListener("click", function(){progressoBiobalistica = 3;
                        biobalisticaAberta()});
                break;
                case 3:
                    botaoLigaBiobalisticaPress.visible = false;
                    portaFechada.visible = true;
                    biobalisticaPlacaExplPeq.visible = true;
                    biobalisticaEfeito.visible = false;
                    biobalisticaPlacaExpl.visible = false;
                    portaAberta.visible = false;
                    botaoLigaBiobalistica.cursor = "pointer";
                    botaoLigaBiobalistica.addEventListener("click", animaBiobalistica);
                break;
                case 4:
                    botaoLigaBiobalisticaPress.visible = false;
                    botaoLigaBiobalistica.visible = true;
                    portaFechada.visible = true;
                    biobalisticaPlacaExplPeq.visible = false;
                    biobalisticaEfeito.visible = false;
                    biobalisticaPlacaExpl.visible = false;
                    portaAberta.visible = false;
                    botaoLigaBiobalistica.cursor = "default";
                    botaoLigaBiobalistica.removeEventListener("click", animaBiobalistica);
                    portaFechada.cursor = "pointer";
                    portaFechada.addEventListener("click", function(){progressoBiobalistica = 5;
                        biobalisticaAberta()})
                break;
                case 5:
                    botaoLigaBiobalisticaPress.visible = false;
                    botaoLigaBiobalistica.visible = true;
                    portaFechada.visible = false;
                    biobalisticaEfeito.visible = false;
                    biobalisticaPlacaExpl.visible = false;
                    portaAberta.visible = true;
                    portaAberta.cursor = "default";
                    portaAberta.removeEventListener("click", function(){progressoBiobalistica = 2;
                        biobalisticaAberta()});
                    placaPlanta.cursor = "pointer";
                    placaPlanta.addEventListener("click", function(){progressoBiobalistica = 6;
                        biobalisticaAberta()})
                break;
                case 6:
                    botaoLigaBiobalisticaPress.visible = false;
                    botaoLigaBiobalistica.visible = true;
                    portaFechada.visible = false;
                    biobalisticaEfeito.visible = false;
                    biobalisticaPlacaExpl.visible = false;
                    placaPlanta.visible = false;
                    portaAberta.visible = true;
                    tuboEnsaio.visible = true;
                    tuboEnsaio.cursor = "pointer";
                    tuboEnsaio.addEventListener("click", function(){progressoBiobalistica = 7;
                        biobalisticaAberta()})
                break;
                case 7:
                    botaoLigaBiobalisticaPress.visible = false;
                    botaoLigaBiobalistica.visible = true;
                    biobalisticaPlacaExplPeq.visible = false;
                    biobalisticaEfeito.visible = false;
                    biobalisticaPlacaExpl.visible = false;
                    tuboEnsaio.visible = false;
                    tuboSemFolha.visible = true;
                    portaAberta.visible = true;
                    continuarBotao.visible = true;
                    continuarBotao.addEventListener("click", cena9);
                break;
            }
        }

        function avanca() {
                progressoBiobalistica = 1;
                cena8();
        }

        function avanca1() {
                progressoBiobalistica = 2;
                biobalisticaAberta();
        }

        function animaBiobalistica() {
            botaoLigaBiobalistica.visible = false;
            botaoLigaBiobalisticaPress.visible = true;
            biobalisticaEfeito.visible = true;
            biobalisticaEfeito.alpha = 0;
            progressoBiobalistica = 4;

            createjs.Tween.get(biobalisticaEfeito).to({alpha:1},300).to({alpha:0},300).to({alpha:1},300).to({alpha:0},300)
            .to({alpha:1},300).to({alpha:0},300).to({alpha:1},300).to({alpha:0},300).to({alpha:1},300).to({alpha:0},300)
            .to({alpha:1},300).to({alpha:1},300).to({alpha:0},300).to({alpha:1},300).to({alpha:1},300).to({alpha:0},300)
            .to({alpha:1},300).to({alpha:1},300).to({alpha:0},300);

            createjs.Tween.get(placaPlanta).wait(5700).to({alpha:1},4000).call(function(){biobalisticaAberta()});
        }

        function bancadaAberta2() {
            fase1Container.visible = false;
            escurecer.visible = true;
            bancada2Container.visible = true;
            bancadaFundo.visible = true;
            almofariz1.visible = false;
            almofariz2.visible = false;

            caixaGarota.visible = false;
            caixaGaroto.visible = false;
            passarFalaBt.visible = false;
            
            folhas.cursor = "pointer";
            folhas.on("pressmove",function(evt) {
                        evt.currentTarget.x = evt.stageX-95;   

                        if (evt.currentTarget.x < 400 && evt.currentTarget.x > 320) {
                            evt.currentTarget.x = 320;
                            folhas.visible = false;
                            almofariz.visible = false;
                            almofariz1.visible = true;
                            triturar();
                        }
                    });
        }

        function triturar() {
            
            pistilo.cursor = "pointer";

            pistilo.on("pressmove",function(evt) {
                        evt.currentTarget.y = evt.stageY-95;  
                        if (evt.currentTarget.y > 340) {
                            evt.currentTarget.y = 340;
                            triturado();
                        }
                    });

        };  

        function triturado() {
            pistilo.cursor = "default";
            createjs.Tween.get(pistilo).to({y:200}, 500).to({y:340}, 500).to({y:200}, 500).to({y:340}, 500).call(function(){falaTriturado();});
            almofariz1.visble = true;
            almofariz1.alpha = 1;
            createjs.Tween.get(almofariz1).to({alpha:0}, 2000);
            almofariz2.visible = true;
            almofariz2.alpha = 0;
            createjs.Tween.get(almofariz2).to({alpha:2}, 2000);
        }

        function geladeiraAberta3() {
            fase1Container.visible = false;
            geladeiraAberta.visible = true;
            geladeira1Container.visible = true;

            progVcSabia=5;
            limiteVcSabia++;
            avisaSabia();

            solucExtrDna.addEventListener("mouseover", function () {createjs.Tween.get(placaExtrDna).to({alpha:1}, 200)});
            solucExtrDna.addEventListener("mouseout", function () {createjs.Tween.get(placaExtrDna).to({alpha:0}, 200)});
            solucaoGene.addEventListener("mouseover", function () {createjs.Tween.get(placaGene).to({alpha:1}, 200)});
            solucaoGene.addEventListener("mouseout", function () {createjs.Tween.get(placaGene).to({alpha:0}, 200)});
            
            solucExtrDna.addEventListener("click", pegarSolucExtrDna);
            solucAmplDna.addEventListener("click", pegarSolucAmplDna);
        }

        function pegarSolucExtrDna() {
            if (contador == 0) {
                solucExtrDna.visible = false;
                contador++;
            } else {
                solucExtrDna.visible = false;
                falaVoltaBanc();
            };
            
        }

        function pegarSolucAmplDna() {
            if (contador == 0) {
                solucAmplDna.visible = false;
                contador++;
            } else {
                solucAmplDna.visible = false;
                falaVoltaBanc();
            };
            
        }

        function bancadaAberta3() {
            fase1Container.visible = false;
            bancada3Container.visible = true;
            bancadaFundo.visible = true;

            bastaoVidro.visible = true;
            bastaoFitas.visible = true;
            bastaoFitas.alpha = 0;
            bastaoSFitas.visible = false;
            micropipeta1.visible = true;
            micropipeta1.alpha = 0;
            micropipeta2.visible = true;
            micropipeta2.alpha = 0;
            micropipeta3.visible = true;
            micropipeta3.alpha = 0;
            micropipeta4.visible = true;
            micropipeta4.alpha = 0;
            microtubulo1.visible = true;
            microtubulo2.visible = false;
            microtubulo3.visible = false;
            microtubulo4.visible = false;
            solucDnaBanc.visible = true;
            bequer.visible = false;
            bequer1.visible = true;
            bequer2.visible = true;
            bequer2.alpha = 0;
            bequer3.visible = true;
            bequer3.alpha = 0;
            bequer4.visible = true;
            bequer4.alpha = 0;
            bequer5.visible = true;
            bequer5.alpha = 0;
            bequer6.visible = true;
            bequer6.alpha = 0;
            bequer7.visible = true;
            bequer7.alpha = 0;

            caixaGarota.visible = false;
            caixaGaroto.visible = false;
            passarFalaBt.visible = false;

            bastaoVidro.cursor = "pointer";

            bastaoVidro.on("pressmove",function(evt) {
                        evt.currentTarget.x = evt.stageX-20; 

                        if (evt.currentTarget.x > 400) {
                            evt.currentTarget.x = 400;
                        } else if (evt.currentTarget.x < 310) {
                            evt.currentTarget.x = 310;
                            createjs.Tween.get(bequer1).to({alpha:0}, 500);
                            createjs.Tween.get(bequer2).to({alpha:1}, 500).to({alpha:0}, 500);
                            createjs.Tween.get(bequer3).wait(500).to({alpha:1}, 500).to({alpha:0}, 500);
                            createjs.Tween.get(bequer4).wait(1000).to({alpha:1}, 500).to({alpha:0}, 500);
                            createjs.Tween.get(bequer5).wait(1500).to({alpha:1}, 500).to({alpha:0}, 500);
                            createjs.Tween.get(bequer6).wait(2000).to({alpha:1}, 500).call(function(){fitasMicrotubulo()});
                        }
                    });

                    bastaoVidro.on("pressup", function(evt) {
                        evt.currentTarget.x = 400;
                        evt.currentTarget.y = 150; 
                    }); 

        }

        function fitasMicrotubulo() {
            bastaoVidro.addEventListener("click", fitasMicrotubulo1);
            bastaoVidro.y = 100;
        }

        function fitasMicrotubulo1() {
            createjs.Tween.get(bequer6).to({alpha:0}, 500);

            createjs.Tween.get(bequer7).to({alpha:1}, 500);

            createjs.Tween.get(bastaoVidro).to({alpha:0}, 500);

            createjs.Tween.get(bastaoFitas).to({alpha:1}, 500);

            bastaoFitas.cursor = "pointer";

            bastaoFitas.addEventListener("click", passaFitas);

        }

        function passaFitas() {
            createjs.Tween.get(bastaoFitas).to({alpha:0}, 500);

            bastaoSFitas.visible = true;

            microtubulo1.visible = false;

            microtubulo2.visible = true;

            createjs.Tween.get(micropipeta1).to({alpha:1}, 500);
            micropipeta1.cursor = "pointer";

            micropipeta1.addEventListener("click", microDna);
        }

        function microDna() {
            createjs.Tween.get(bastaoSFitas).to({alpha:0}, 500);

            createjs.Tween.get(micropipeta1).to({alpha:0}, 500);

            createjs.Tween.get(micropipeta2).to({alpha:1}, 500).call(function(){microTubo()});
        }

        function microTubo() {
            createjs.Tween.get(micropipeta2).to({alpha:0}, 500);

            createjs.Tween.get(micropipeta3).to({alpha:1}, 500);
            micropipeta3.cursor = "pointer";

            micropipeta3.addEventListener("click", tubuloCheio);
        }

        function tubuloCheio() {
            createjs.Tween.get(micropipeta3).to({alpha:0}, 500);

            createjs.Tween.get(micropipeta4).to({alpha:1}, 500).to({alpha:0}, 500);

            createjs.Tween.get(microtubulo2).to({alpha:0}, 500);

            createjs.Tween.get(microtubulo3).to({alpha:1}, 500);

            microtubulo3.visible = true;
            microtubulo3.alpha = 0;
            microtubulo3.cursor = "pointer";

            microtubulo3.addEventListener("click", tubuloFechado);
        }

        function tubuloFechado() {
            microtubulo3.visible = false;

            microtubulo4.visible = true;
            microtubulo4.cursor = "pointer";

            microtubulo4.addEventListener("click", falaTermo);
        }

        function termocicladorAberto1() {
            fase1Container.visible = false;
            termocicladorContainer.visible = true;

            termocicladorTampa.visible = false;
            botaoLigarTermoPress.visible = false;
            botaoAbrirTermoPress.visible = false;
            microtubuloTermo.visible = false;

            caixaGarota.visible = false;
            caixaGaroto.visible = false;
            passarFalaBt.visible = false;

            progVcSabia=6;
            limiteVcSabia++;
            avisaSabia();

            botaoAbrirTermo.cursor = "pointer";
            botaoAbrirTermo.addEventListener("click", tampaAberta1);
        }

        function tampaAberta1() {
            termociclador.visible = false;
            termocicladorTampa.visible = true;
            botaoAbrirTermo.visible = false;
            botaoAbrirTermoPress.visible = true;
            microtubuloTermo.visible = true;
            microtubuloTermo.cursor = "pointer";

            microtubuloTermo.on("pressmove",function(evt) {
                        evt.currentTarget.x = evt.stageX-34;   

                        if (evt.currentTarget.x < 400) {
                            microtubuloTermo.visible = false;
                            botaoAbrirTermoPress.cursor = "pointer";
                            botaoAbrirTermoPress.addEventListener("click", fecharTermo);
                        }
                    });

                    microtubuloTermo.on("pressup", function(evt) {
                        evt.currentTarget.x = 500;
                        evt.currentTarget.y = 120; 
                 });
        }

        function fecharTermo(){
            termociclador.visible = true;
            termocicladorTampa.visible = false;
            botaoAbrirTermo.visible = true;
            botaoAbrirTermoPress.visible = false;
            botaoLigarTermo.cursor = "pointer";
            botaoLigarTermo.addEventListener("click", ligarTermo);
            
        }

        function ligarTermo() {
            botaoLigarTermo.visible = false;
            botaoLigarTermoPress.visible = true;
            falaTermoFim();
        }

        function eletroforeseAberta1() {
            fase1Container.visible = false;
            eletroforeseContainer.visible = true;

            contaGotaCheio.visible = false;
            microtubulosCheios.visible = false;
            microtubulosVazios.visible = false;
            eletroforese2.visible = false;
            eletroforese3.visible = false;
            eletroforese4.visible = false;
            eletroforese5.visible = false;
            gelSeparado.visible = false;
            gelFixo.visible = false;
            gotaGene.visible = false;

            caixaGarota.visible = false;
            caixaGaroto.visible = false;
            passarFalaBt.visible = false;

            progVcSabia=7;
            limiteVcSabia++;
            avisaSabia();

            pente.cursor = "pointer";
            pente.on("pressmove",function(evt) {
                        evt.currentTarget.y = evt.stageY-20;  
                        console.log(pente.y); 

                        if (evt.currentTarget.y > 550) {
                            evt.currentTarget.y = 550;
                        } else if (evt.currentTarget.y < 430) {
                            evt.currentTarget.y = 430;
                            eletroforesePente();
                        }
                    });
        }

        function eletroforesePente(){
            pente.visible = false;
            eletroforese1.visible = false;
            eletroforese2.visible = true;

            continuarBotao.visible = true;
            continuarBotao.addEventListener("click", voltarfase1);
        }
        
        function termocicladorAberto2(){
            fase1Container.visible = false;
            termocicladorContainer.visible = true;

            termocicladorTampa.visible = false;
            botaoLigarTermoPress.visible = true;
            botaoAbrirTermoPress.visible = false;

            botaoAbrirTermo.cursor = "pointer";
            botaoAbrirTermo.removeEventListener("click", tampaAberta1);
            botaoAbrirTermo.addEventListener("click", tampaAberta2);
        }

        function tampaAberta2(){
            termociclador.visible = false;
            termocicladorTampa.visible = true;
            botaoAbrirTermo.visible = false;
            botaoAbrirTermoPress.visible = true;
            falaTermo2();        
        }

        function eletroforeseAberta2() {
            fase1Container.visible = false;
            eletroforeseContainer.visible = true;

            pente.visible = false
            contaGotaCheio.visible = false;
            microtubulosCheios.visible = true;
            microtubulosVazios.visible = false;
            eletroforese1.visible = true;
            eletroforese2.visible = false;
            eletroforese3.visible = false;
            eletroforese4.visible = false;
            eletroforese5.visible = false;
            gelSeparado.visible = false;
            gelFixo.visible = false;
            gotaGene.visible = false;

            contaGotaVazio.cursor = "pointer";
            contaGotaVazio.on("pressmove",function(evt) {
                        evt.currentTarget.x = evt.stageX-20;  
                        console.log(contaGotaVazio.x); 

                        if (evt.currentTarget.x > 270) {
                            evt.currentTarget.x = 270;
                            contaGotas();
                        } else if (evt.currentTarget.x < 230) {
                            evt.currentTarget.x = 230;
                        }
                    });
            falaEletro();
        }

        function contaGotas() {
            contaGotaCheio.visible = true;
            contaGotaVazio.visible = false;
            microtubulosCheios.visible = false;
            microtubulosVazios.visible = true;

            contaGotaCheio.cursor = "pointer";

            contaGotaCheio.on("pressmove",function(evt) {
                        evt.currentTarget.x = evt.stageX-20;
                        evt.currentTarget.y = evt.stageY-20;   

                        if (evt.currentTarget.x < 180 && evt.currentTarget.y < 430) {
                            contaGotaCheio.visible = false;
                            derrubaGota();
                        }
                    });

                    contaGotaCheio.on("pressup", function(evt) {
                        evt.currentTarget.x = 270;
                        evt.currentTarget.y = 530; 
                 });
        
        }

        function derrubaGota() {
            contaGotaVazio.visible = true;
            contaGotaVazio.x = 100;
            contaGotaVazio.y = 320;
            contaGotaVazio.cursor = "default";

            gotaGene.visible = true;
            gotaGene.x = 155;
            gotaGene.y = 340;
            gotaGene.scaleX = 0.4;
            gotaGene.scaleY = 0.4;

            createjs.Tween.get(gotaGene).to({y:430}, 1000).to({alpha:0}, 200).call(function(){buracoCheio()});

        }

        function buracoCheio() {
            eletroforese1.visible = false;
            eletroforese3.visible = true;
            contaGotaVazio.visible = false;

            eletroforese3.cursor = "pointer";
            eletroforese3.addEventListener("click", fechaEletro);
        }

        function fechaEletro() {
            eletroforese3.visible = false;
            eletroforese4.visible = true;
            ligaEletroZoom();
        }

        function ligaEletroZoom() {
            eletroZoomContainer.visible = true;
            positivo.visible = true;
            positivo.alpha = 0;
            negativo.visible = true;
            negativo.alpha = 0;
            eletroZoom.visible = true;
            eletroZoom.alpha = 0;
            eletroZoom1.visible = true;
            eletroZoom1.alpha = 0;
            eletroZoom2.visible = true;
            eletroZoom2.alpha = 0;

            createjs.Tween.get(eletroZoom).to({alpha:1}, 1000);
            createjs.Tween.get(positivo).to({alpha:1}, 1000);
            createjs.Tween.get(negativo).to({alpha:1}, 1000);
            createjs.Tween.get(eletroZoom1).to({alpha:1}, 1000);
            createjs.Tween.get(eletroZoom2).wait(1500).to({alpha:1}, 1000).call(function(){fechaZoom()});

        }

        function fechaZoom() {
            falaEletro1();    
        }

        function abreEletro() {
            eletroforese4.visible = false;
            eletroforese5.visible = true;
            gelSeparado.visible = true;
            gelSeparado.cursor = "pointer";

            gelSeparado.on("pressmove",function(evt) {
                        evt.currentTarget.x = evt.stageX-86;
                        evt.currentTarget.y = evt.stageY-15;   

                        if (evt.currentTarget.x > 450 && evt.currentTarget.y < 430) {
                            gelSeparado.visible = false;
                            ligaRaioX();
                        }
                    });

                    gelSeparado.on("pressup", function(evt) {
                        evt.currentTarget.x = 125;
                        evt.currentTarget.y = 460; 
                 });
        }

        function ligaRaioX(){
            raioX.alpha = 0;
            raioX.visible = true;
            gelFixo.visible = true;

            progVcSabia=8;
            limiteVcSabia++;
            avisaSabia();

            createjs.Tween.get(raioX).to({alpha:1}, 1000).call(function(){falaEletro3()});
        }


        function cVegetacaoAberta2() {
            fase1Container.visible = false;
            cVegetacao2Container.visible = true;

            switch(contador) {
            case 0:
                pote.visible = true;
                pote1.visible = false;
                pote2.visible = false;
                pote3.visible = false;
                pote4.visible = false;
                pote5.visible = false;
                pote6.visible = false;
                pote7.visible = false;
                pote.addEventListener("click", function(){contador++;
                    cVegetacaoAberta2();});
            break;
            case 1:
                pote.visible = false;
                pote1.visible = true;
                pote2.visible = false;
                pote3.visible = false;
                pote4.visible = false;
                pote5.visible = false;
                pote6.visible = false;
                pote7.visible = false;
                pote1.addEventListener("click", function(){contador++;
                    cVegetacaoAberta2();});
            break;
            case 2:
                pote.visible = false;
                pote1.visible = false;
                pote2.visible = true;
                pote3.visible = false;
                pote4.visible = false;
                pote5.visible = false;
                pote6.visible = false;
                pote7.visible = false;
                pote2.addEventListener("click", function(){contador++;
                    cVegetacaoAberta2();});
            break;
            case 3:
                pote.visible = false;
                pote1.visible = false;
                pote2.visible = false;
                pote3.visible = true;
                pote4.visible = false;
                pote5.visible = false;
                pote6.visible = false;
                pote7.visible = false;
                pote3.addEventListener("click", function(){contador++;
                    cVegetacaoAberta2();});
            break;
            case 4:
                pote.visible = true;
                pote1.visible = false;
                pote2.visible = false;
                pote3.visible = false;
                pote4.visible = true;
                pote5.visible = true;
                pote5.alpha = 0;
                pote6.visible = false;
                pote7.visible = true;
                pote7.alpha = 0;
                crescer();
            break;
            }
            if (progVcSabia != 9) {
                progVcSabia=9;
                limiteVcSabia++;
                avisaSabia();
            } else if (progVcSabia == 9) {};

        }

        function crescer() {
            createjs.Tween.get(pote4).to({alpha:0},2000);
            createjs.Tween.get(pote5).to({alpha:1},2000).to({alpha:0},2000);
            createjs.Tween.get(pote7).wait(2000).to({alpha:1},2000).call(function() {acabaVegetacao2()});
        }

        function acabaVegetacao2() {
            pote.cursor = "default";
            pote.removeAllEventListeners();
            pote7.cursor ="pointer";
            pote7.addEventListener("click", function() {pote7.visible = false;
                pote6.visible = true;
                falaSementes();})
        }

        function terminaFase1() {
            contaTexto = 0;
            caixaGarota.visible = false;
            caixaGaroto.visible = false;
            passarFalaBt.visible = false;
            texto57.visible = false;
            cenaLab.visible = true;
            cenaLab.alpha = 0
            phaseoutin(cVegetacao2Container, cenaLab);
            falaCenaLab();
        }

    //Fase 2:
        function cenaFase2() {
            mapaContainer.visible = false;
            vcSabiaBt.visible = false;
            badgeBt.visible = false;
            cenaFazenda.visible = true;
            cena14();
        }
        
        function fase2(){
            contaTexto = 0;

            vcSabiaBt.visible = true;
            vcSabiaBt.x = 740;
            vcSabiaBt.y = 15;

            badgeBt.visible = true;
            badgeBt.x = 680;
            badgeBt.y = 15;

            cenaFazenda.visible = false;
            escurecer.visible = true;
            fase2Container.visible = true;
            fase1Container.visible = false;

            switch(progresso) {
            case 0:
                progVcSabia = 13;
                limiteVcSabia += 4;
                if (plantarDir != 0 && plantarEsq != 0) {
                    texto85.visible = false;
                    falaPlantou();
                } else {
                    soloDir2.visible = false;
                    soloEsq2.visible = false;
                    soloDir3.visible = false;
                    soloEsq3.visible = false;
                    soloDirBt.visible = false;
                    soloEsqBt.visible = false;
                    soloDirConv.visible = false;
                    soloEsqConv.visible = false;

                    if (plantarDir == 0) {soloDir.cursor = "pointer";
                        soloDir1.visible = false;
                        soloDir.addEventListener("click", caixaDirAtiva);
                    };

                    if (plantarEsq == 0) {soloEsq.cursor = "pointer";
                        soloEsq1.visible = false;
                        soloEsq.addEventListener("click", caixaEsqAtiva);
                    };
                };
                break;
            case 1:
                texto85.visible = false;
                texto86.visible = false;
                texto87.visible = false;
                texto88.visible = false;
                caixaGaroto.visible = false;
                passarFalaBt.visible = false;

                soloDir1.visible = false;
                soloEsq1.visible = false;
                soloDir2.visible = true;
                soloEsq2.visible = true;
                soloDir3.visible = false;
                soloEsq3.visible = false;
                soloDirBt.visible = false;
                soloEsqBt.visible = false;
                soloDirConv.visible = false;
                soloEsqConv.visible = false;

                createjs.Tween.get(fase2Container).wait(500).to({alpha:1},1300).wait(700).call(function(){passaTempo(fase2Container)});
                break;
            case 2:
                soloDir1.visible = false;
                soloEsq1.visible = false;
                soloDir2.visible = false;
                soloEsq2.visible = false;
                soloDir3.visible = true;
                soloEsq3.visible = true;
                soloDirBt.visible = false;
                soloEsqBt.visible = false;
                soloDirConv.visible = false;
                soloEsqConv.visible = false;

                createjs.Tween.get(fase2Container).wait(500).to({alpha:1},1300).wait(700).call(function(){passaTempo(fase2Container)});
                break;
            case 3:
                soloDir1.visible = false;
                soloEsq1.visible = false;
                soloDir2.visible = false;
                soloEsq2.visible = false;
                soloDir3.visible = false;
                soloEsq3.visible = false;
                if (plantarDir == 1) {
                    soloDirBt.visible = true;
                    soloDirConv.visible = false;
                } else if (plantarDir == 2) {
                    soloDirBt.visible = false;
                    soloDirConv.visible = true;
                };
                if (plantarEsq == 1) {
                    soloEsqBt.visible = true;
                    soloEsqConv.visible = false;
                } else if (plantarEsq == 2) {
                    soloEsqBt.visible = false;
                    soloEsqConv.visible = true;
                };
                cena15();
                break;
            };
            
        };

        function caixaDirAtiva(){
            texto85.visible = false;
            texto86.visible = false;
            texto87.visible = false;
            texto88.visible = false;
            caixaGaroto.visible = false;
            passarFalaBt.visible = false;

            soloEsq.cursor = "default";
            soloEsq.removeEventListener("click", caixaEsqAtiva);
            soloDir.cursor = "default";
            soloDir.removeEventListener("click", caixaDirAtiva);
            fase2CaixaDirContainer.visible = true;

            btn_fecharDir.addEventListener("click", voltarfase2);
            btn_btDir.addEventListener("click", function(){plantDir(1)})
            btn_convDir.addEventListener("click", function(){plantDir(2)});
        };


        function plantDir(numero) {
            if (numero == 1) {
                if (plantarEsq !=1) {
                    soloDir.visible = false;
                    soloDir1.visible = true;
                    plantarDir = 1;
                    falaPlantaBt();
                    voltarfase2();
                } else {falaNPlantaCv()}
            } else if (numero == 2) {
                if (plantarEsq != 2) {
                    soloDir.visible = false;
                    soloDir1.visible = true;
                    plantarDir = 2;
                    falaPlantaCv();
                    voltarfase2();
                } else {falaNPlantaBt()}
            };
        };

        function caixaEsqAtiva(){
            texto85.visible = false;
            texto86.visible = false;
            texto87.visible = false;
            texto88.visible = false;
            caixaGaroto.visible = false;
            passarFalaBt.visible = false;

            soloEsq.cursor = "default";
            soloEsq.removeEventListener("click", caixaEsqAtiva);
            soloDir.cursor = "default";
            soloDir.removeEventListener("click", caixaDirAtiva);
            fase2CaixaEsqContainer.visible = true;

            btn_fecharEsq.addEventListener("click", voltarfase2);
            btn_btEsq.addEventListener("click", function(){plantEsq(1)})
            btn_convEsq.addEventListener("click", function(){plantEsq(2)});
        };

        function plantEsq(numero) {
            if (numero == 1) {
                if (plantarDir != 1) {
                    soloEsq.visible = false;
                    soloEsq1.visible = true;
                    plantarEsq = 1;
                    falaPlantaBt();
                    voltarfase2();
                } else {falaNPlantaCv()}
            } else if (numero == 2) {
                if (plantarDir !=2) {
                    soloEsq.visible = false;
                    soloEsq1.visible = true;
                    plantarEsq = 2;
                    falaPlantaCv();
                    voltarfase2();
                } else {falaNPlantaBt()}
            };
        };


        function voltarfase2(){
            fase2CaixaEsqContainer.visible = false;
            fase2CaixaDirContainer.visible = false;
            fase2();
        };


        function passaTempo(targetobj1){ 
          createjs.Tween.get(targetobj1).to({alpha:0},1300).call(function(){
            progresso++;
            fase2();
            createjs.Tween.get(targetobj1).wait(500).to({alpha:1},1300)})
        };

        function fimFase2() {
            contaTexto = 0;
            phaseoutin(fase2Container, cenaCaminhao);
            cenaCaminhao.visible = true;
            cenaCaminhao.alpha = 0;
            cena16();
        }

    //Fase 3:
        function fase3() {
            contaTexto = 0;
            caixaGarota.visible = false;
            caixaGaroto.visible = false;
            passarFalaBt.visible = false;

            fase3Container.visible = true;
            maq1.visible = true;
            anima1.alpha = 0;
            anima2.alpha = 0;
            anima3.alpha = 0;
            anima4.alpha = 0;
            anima5.alpha = 0;
            maq5b.alpha = 0;
            maq3.alpha = 0;

            vcSabiaBt.visible = true;
            vcSabiaBt.x = 740;
            vcSabiaBt.y = 15;

            badgeBt.visible = true;
            badgeBt.x = 680;
            badgeBt.y = 15;

            progVcSabia=14;
            limiteVcSabia++;
            avisaSabia();

            maq1.cursor = "pointer";

            maq1.addEventListener("click", animacao1);

            function animacao1() {
                maq1.cursor = "default";
                maq1.removeEventListener("click", animacao1);
                createjs.Tween.get(anima1).to({alpha:1}).wait(250).to({alpha:0}).to({alpha:1}).wait(250).to({alpha:0}).to({alpha:1}).wait(250).to({alpha:0});
                createjs.Tween.get(anima2).wait(250).to({alpha:1}).wait(250).to({alpha:0}).wait(250).to({alpha:1}).wait(250).to({alpha:0}).to({alpha:1}).to({alpha:0}, 500).call(function(){animacao2()});
            };

            function animacao2() {
                createjs.Tween.get(anima3).to({alpha:1}, 500).to({x:420, y:170}, 1200).to({alpha:0}, 100).to({x:510, y:160}).to({alpha:1}, 100).to({alpha:0}, 200).call(function(){animacao3()});
            };

            function animacao3(){
                createjs.Tween.get(maq3).to({alpha:1}, 200).wait(1100).to({alpha:0}, 200);
                createjs.Tween.get(anima4).wait(1000).to({alpha:1}, 100).to({x:710, y:260}, 600).to({x:635, y:300}, 1200).to({alpha:0}, 200).call(function(){animacao4()});
            }

            function animacao4(){
                createjs.Tween.get(anima5).to({alpha:1}, 200).to({x:450, y:390},1200).to({alpha:0}, 200).call(function(){animacao5()});
            }

            function animacao5(){
                createjs.Tween.get(maq5b).to({alpha:1}, 200).wait(1200).call(function(){cena18()});
            }
        }

    //Fase 4:

    function fase4() {
        phaseoutin(mapaContainer, fundoFase4);
        falaFase4();
    }
////////////////////////////////////////////////////////////////////



    // Voce Sabia:
        function voceSabia() {
            voceSabiaContainer.visible = true;

            switch(progVcSabia) {
                case 0:
                    fechaSabia.visible = true;
                    livroLiso.visible = true;
                    passaSabia.visible = true;
                    voltaSabia.visible = true;
                    sabia1.visible = false;
                    sabia2.visible = false;
                    sabia3.visible = false;
                    sabia4.visible = false;
                    sabia5.visible = false;
                    sabia6.visible = false;
                    sabia7.visible = false;
                    sabia8.visible = false;
                    sabia9.visible = false;
                    sabia10.visible = false;
                    sabia11.visible = false;
                    sabia12.visible = false;
                    sabia13.visible = false;
                    sabia14.visible = false;
                break;
                case 1:
                    fechaSabia.visible = true;
                    livroLiso.visible = true;
                    passaSabia.visible = true;
                    voltaSabia.visible = true;
                    sabia1.visible = true;
                    sabia2.visible = false;
                    sabia3.visible = false;
                    sabia4.visible = false;
                    sabia5.visible = false;
                    sabia6.visible = false;
                    sabia7.visible = false;
                    sabia8.visible = false;
                    sabia9.visible = false;
                    sabia10.visible = false;
                    sabia11.visible = false;
                    sabia12.visible = false;
                    sabia13.visible = false;
                    sabia14.visible = false;
                break;
                case 2:
                    fechaSabia.visible = true;
                    livroLiso.visible = true;
                    passaSabia.visible = true;
                    voltaSabia.visible = true;
                    sabia1.visible = false;
                    sabia2.visible = true;
                    sabia3.visible = false;
                    sabia4.visible = false;
                    sabia5.visible = false;
                    sabia6.visible = false;
                    sabia7.visible = false;
                    sabia8.visible = false;
                    sabia9.visible = false;
                    sabia10.visible = false;
                    sabia11.visible = false;
                    sabia12.visible = false;
                    sabia13.visible = false;
                    sabia14.visible = false;
                break;
                case 3:
                    fechaSabia.visible = true;
                    livroLiso.visible = true;
                    passaSabia.visible = true;
                    voltaSabia.visible = true;
                    sabia1.visible = false;
                    sabia2.visible = false;
                    sabia3.visible = true;
                    sabia4.visible = false;
                    sabia5.visible = false;
                    sabia6.visible = false;
                    sabia7.visible = false;
                    sabia8.visible = false;
                    sabia9.visible = false;
                    sabia10.visible = false;
                    sabia11.visible = false;
                    sabia12.visible = false;
                    sabia13.visible = false;
                    sabia14.visible = false;
                break;
                case 4:
                    fechaSabia.visible = true;
                    livroLiso.visible = true;
                    passaSabia.visible = true;
                    voltaSabia.visible = true;
                    sabia1.visible = false;
                    sabia2.visible = false;
                    sabia3.visible = false;
                    sabia4.visible = true;
                    sabia5.visible = false;
                    sabia6.visible = false;
                    sabia7.visible = false;
                    sabia8.visible = false;
                    sabia9.visible = false;
                    sabia10.visible = false;
                    sabia11.visible = false;
                    sabia12.visible = false;
                    sabia13.visible = false;
                    sabia14.visible = false;
                break;
                case 5:
                    fechaSabia.visible = true;
                    livroLiso.visible = true;
                    passaSabia.visible = true;
                    voltaSabia.visible = true;
                    sabia1.visible = false;
                    sabia2.visible = false;
                    sabia3.visible = false;
                    sabia4.visible = false;
                    sabia5.visible = true;
                    sabia6.visible = false;
                    sabia7.visible = false;
                    sabia8.visible = false;
                    sabia9.visible = false;
                    sabia10.visible = false;
                    sabia11.visible = false;
                    sabia12.visible = false;
                    sabia13.visible = false;
                    sabia14.visible = false;
                break;
                case 6:
                    fechaSabia.visible = true;
                    livroLiso.visible = true;
                    passaSabia.visible = true;
                    voltaSabia.visible = true;
                    sabia1.visible = false;
                    sabia2.visible = false;
                    sabia3.visible = false;
                    sabia4.visible = false;
                    sabia5.visible = false;
                    sabia6.visible = true;
                    sabia7.visible = false;
                    sabia8.visible = false;
                    sabia9.visible = false;
                    sabia10.visible = false;
                    sabia11.visible = false;
                    sabia12.visible = false;
                    sabia13.visible = false;
                    sabia14.visible = false;
                break;
                case 7:
                    fechaSabia.visible = true;
                    livroLiso.visible = true;
                    passaSabia.visible = true;
                    voltaSabia.visible = true;
                    sabia1.visible = false;
                    sabia2.visible = false;
                    sabia3.visible = false;
                    sabia4.visible = false;
                    sabia5.visible = false;
                    sabia6.visible = false;
                    sabia7.visible = true;
                    sabia8.visible = false;
                    sabia9.visible = false;
                    sabia10.visible = false;
                    sabia11.visible = false;
                    sabia12.visible = false;
                    sabia13.visible = false;
                    sabia14.visible = false;
                break;
                case 8:
                    fechaSabia.visible = true;
                    livroLiso.visible = true;
                    passaSabia.visible = true;
                    voltaSabia.visible = true;
                    sabia1.visible = false;
                    sabia2.visible = false;
                    sabia3.visible = false;
                    sabia4.visible = false;
                    sabia5.visible = false;
                    sabia6.visible = false;
                    sabia7.visible = false;
                    sabia8.visible = true;
                    sabia9.visible = false;
                    sabia10.visible = false;
                    sabia11.visible = false;
                    sabia12.visible = false;
                    sabia13.visible = false;
                    sabia14.visible = false;
                break;
                case 9:
                    fechaSabia.visible = true;
                    livroLiso.visible = true;
                    passaSabia.visible = true;
                    voltaSabia.visible = true;
                    sabia1.visible = false;
                    sabia2.visible = false;
                    sabia3.visible = false;
                    sabia4.visible = false;
                    sabia5.visible = false;
                    sabia6.visible = false;
                    sabia7.visible = false;
                    sabia8.visible = false;
                    sabia9.visible = true;
                    sabia10.visible = false;
                    sabia11.visible = false;
                    sabia12.visible = false;
                    sabia13.visible = false;
                    sabia14.visible = false;
                break;
                case 10:
                    fechaSabia.visible = true;
                    livroLiso.visible = true;
                    passaSabia.visible = true;
                    voltaSabia.visible = true;
                    sabia1.visible = false;
                    sabia2.visible = false;
                    sabia3.visible = false;
                    sabia4.visible = false;
                    sabia5.visible = false;
                    sabia6.visible = false;
                    sabia7.visible = false;
                    sabia8.visible = false;
                    sabia9.visible = false;
                    sabia10.visible = true;
                    sabia11.visible = false;
                    sabia12.visible = false;
                    sabia13.visible = false;
                    sabia14.visible = false;
                break;
                case 11:
                    fechaSabia.visible = true;
                    livroLiso.visible = true;
                    passaSabia.visible = true;
                    voltaSabia.visible = true;
                    sabia1.visible = false;
                    sabia2.visible = false;
                    sabia3.visible = false;
                    sabia4.visible = false;
                    sabia5.visible = false;
                    sabia6.visible = false;
                    sabia7.visible = false;
                    sabia8.visible = false;
                    sabia9.visible = false;
                    sabia10.visible = false;
                    sabia11.visible = true;
                    sabia12.visible = false;
                    sabia13.visible = false;
                    sabia14.visible = false;
                break;
                case 12:
                    fechaSabia.visible = true;
                    livroLiso.visible = true;
                    passaSabia.visible = true;
                    voltaSabia.visible = true;
                    sabia1.visible = false;
                    sabia2.visible = false;
                    sabia3.visible = false;
                    sabia4.visible = false;
                    sabia5.visible = false;
                    sabia6.visible = false;
                    sabia7.visible = false;
                    sabia8.visible = false;
                    sabia9.visible = false;
                    sabia10.visible = false;
                    sabia11.visible = false;
                    sabia12.visible = true;
                    sabia13.visible = false;
                    sabia14.visible = false;
                break;
                case 13:
                    fechaSabia.visible = true;
                    livroLiso.visible = true;
                    passaSabia.visible = true;
                    voltaSabia.visible = true;
                    sabia1.visible = false;
                    sabia2.visible = false;
                    sabia3.visible = false;
                    sabia4.visible = false;
                    sabia5.visible = false;
                    sabia6.visible = false;
                    sabia7.visible = false;
                    sabia8.visible = false;
                    sabia9.visible = false;
                    sabia10.visible = false;
                    sabia11.visible = false;
                    sabia12.visible = false;
                    sabia13.visible = true;
                    sabia14.visible = false;
                break;
                case 14:
                    fechaSabia.visible = true;
                    livroLiso.visible = true;
                    passaSabia.visible = true;
                    voltaSabia.visible = true;
                    sabia1.visible = false;
                    sabia2.visible = false;
                    sabia3.visible = false;
                    sabia4.visible = false;
                    sabia5.visible = false;
                    sabia6.visible = false;
                    sabia7.visible = false;
                    sabia8.visible = false;
                    sabia9.visible = false;
                    sabia10.visible = false;
                    sabia11.visible = false;
                    sabia12.visible = false;
                    sabia13.visible = false;
                    sabia14.visible = true;
                break;

            }
        }

        function passaVcSabia() {
            if (limiteVcSabia > progVcSabia) {
                progVcSabia++;
                voceSabia();
            }
        }

        function voltaVcSabia() {
            if (progVcSabia>0) {
                progVcSabia--;
                voceSabia();
            }
        }

        function avisaSabia() {
            createjs.Tween.get(vcSabiaBt).to({alpha:0},300).to({alpha:1},300).to({alpha:0},300).to({alpha:1},300);
        }

    // Badges
        function badgesAberta() {
            badgesContainer.visible = true;

            switch(progBadges) {
                case 0:
                    caixaBadge.visible = true;
                    badge1pkt.visible = false;
                    badge2pkt.visible = false;
                    badge3pkt.visible = false;
                    badge4pkt.visible = false;
                    badge5pkt.visible = false;
                break;
                case 1:
                    badge1pkt.visible = true;
                    badge2pkt.visible = false;
                    badge3pkt.visible = false;
                    badge4pkt.visible = false;
                    badge5pkt.visible = false;
                break;
                case 2:
                    badge1pkt.visible = true;
                    badge2pkt.visible = true;
                    badge3pkt.visible = false;
                    badge4pkt.visible = false;
                    badge5pkt.visible = false;
                break;
                case 3:
                    badge1pkt.visible = true;
                    badge2pkt.visible = true;
                    badge3pkt.visible = true;
                    badge4pkt.visible = false;
                    badge5pkt.visible = false;
                break;
                case 4:
                    badge1pkt.visible = true;
                    badge2pkt.visible = true;
                    badge3pkt.visible = true;
                    badge4pkt.visible = true;
                    badge5pkt.visible = false;
                break;
                case 5:
                    badge1pkt.visible = true;
                    badge2pkt.visible = true;
                    badge3pkt.visible = true;
                    badge4pkt.visible = false;
                    badge5pkt.visible = true;
                break;
            }
        }

        stage.addChild(badge1, badge2, badge3, badge4, badge5);

        function primeiraBadge() {
            texto30.visible = false;
            caixaGarota.visible = false;
            passarFalaBt.visible = false;

            badge1.visible = true;
            badge1.alpha = 0;
            createjs.Tween.get(badge1).wait(500).to({alpha:1},500);

            progBadges = 1;

            badge1.cursor = "pointer";
            badge1.addEventListener("click", function(){badge1.visible = false;
                cena3();})
        }

        function segundaBadge() {
            caixaGarota.visible = false;
            passarFalaBt.visible = false;

            badge2.visible = true;
            badge2.alpha = 0;
            createjs.Tween.get(badge2).wait(500).to({alpha:1},500);

            progBadges = 2;

            badge2.cursor = "pointer";
            badge2.addEventListener("click", function(){badge2.visible = false;
                voltaMapa();})
        }

        function terceiraBadge() {
            badge3.visible = true;
            badge3.alpha = 0;
            createjs.Tween.get(badge3).wait(500).to({alpha:1},500);

            progBadges = 3;

            badge3.cursor = "pointer";
            badge3.addEventListener("click", function(){badge3.visible = false;
                voltaMapa();})
        }

        function quartaBadge() {
            badge4.visible = true;
            badge4.alpha = 0;
            createjs.Tween.get(badge4).wait(500).to({alpha:1},500);

            progBadges = 4;

            badge4.cursor = "pointer";
            badge4.addEventListener("click", function(){badge4.visible = false;
                voltaMapa();})
        }

        function quintaBadge() {
            badge5.visible = true;
            badge5.alpha = 0;
            createjs.Tween.get(badge5).wait(500).to({alpha:1},500);

            progBadges = 5;

            badge5.cursor = "pointer";
            badge5.addEventListener("click", function(){badge5.visible = false;
                voltaMenu();})
        }

// textos
    var contaTexto = 0;
    var txtFont = "20px 'Candara'";

    // Garota falas:
        var texto102 = new createjs.Text("Bom dia Georgia, ainda bem que você ligou!",txtFont,"#001a00");
                    texto102.lineWidth = 480;
                    texto102.lineHeight = 24;
                    texto102.x = 210;
                    texto102.y = 470;
                    texto102.visible = false;

        var texto103 = new createjs.Text("Claro que não! Sei que você é capaz de produzi-lo sozinha!",txtFont,"#001a00");
                    texto103.lineWidth = 480;
                    texto103.lineHeight = 24;
                    texto103.x = 210;
                    texto103.y = 470;
                    texto103.visible = false;

        var texto113 = new createjs.Text("SOZINHA?! Opa… Claro senhora, vou fazer meu melhor!",txtFont,"#001a00");
                texto113.lineWidth = 480;
                texto113.lineHeight = 24;
                texto113.x = 210;
                texto113.y = 470;
                texto113.visible = false;

        var texto104 = new createjs.Text("Qualquer dúvida pode ligar para nosso estagiário, ele pode lhe guiar no processo. Tenho que desligar nos falamos depois!",txtFont,"#001a00");
                    texto104.lineWidth = 480;
                    texto104.lineHeight = 24;
                    texto104.x = 210;
                    texto104.y = 470;
                    texto104.visible = false;

        var texto105 = new createjs.Text("Até mais… Ué ela desligou! Passar pelo processo todo sozinha? Isso não vai ser nada fácil, melhor ligar para esse estagiário.",txtFont,"#001a00");
                    texto105.lineWidth = 480;
                    texto105.lineHeight = 24;
                    texto105.x = 210;
                    texto105.y = 470;
                    texto105.visible = false;

        var texto106 = new createjs.Text("Miguel?",txtFont,"#001a00");
                    texto106.lineWidth = 480;
                    texto106.lineHeight = 24;
                    texto106.x = 210;
                    texto106.y = 470;
                    texto106.visible = false;

        var texto107 = new createjs.Text("Sou eu, Georgia! Nós estudamos na mesma universidade, você era de alguns semestres mais avançados.",txtFont,"#001a00");
                    texto107.lineWidth = 480;
                    texto107.lineHeight = 24;
                    texto107.x = 210;
                    texto107.y = 470;
                    texto107.visible = false;

        var texto108 = new createjs.Text("Ah sim, acho que me lembro. Você deve ser a nova biotecnologista.",txtFont,"#001a00");
                    texto108.lineWidth = 480;
                    texto108.lineHeight = 24;
                    texto108.x = 210;
                    texto108.y = 470;
                    texto108.visible = false;

        var texto109 = new createjs.Text("Sou eu mesma.",txtFont,"#001a00");
                    texto109.lineWidth = 480;
                    texto109.lineHeight = 24;
                    texto109.x = 210;
                    texto109.y = 470;
                    texto109.visible = false;

        var texto110 = new createjs.Text("Bom dia Miguel! Já estou na fazenda.",txtFont,"#001a00");
                    texto110.lineWidth = 480;
                    texto110.lineHeight = 24;
                    texto110.x = 210;
                    texto110.y = 470;
                    texto110.visible = false;

         var texto111 = new createjs.Text("Com as sementes não, mas as espigas foram atacadas por pragas e acho que estão completamente perdidas! Eu vou ser demitida, não vou conseguir meu certificado e minha carreira vai acabar...",txtFont,"#001a00");
                    texto111.lineWidth = 480;
                    texto111.lineHeight = 24;
                    texto111.x = 210;
                    texto111.y = 440;
                    texto111.visible = false;

        var texto112 = new createjs.Text("Calma Georgia!!! Tá tudo certo. O milho convencional é plantado junto ao milho bt para que as pragas não se adaptem e fiquem mais fortes ao atacar o alimento mais resistente.",txtFont,"#001a00");
                    texto112.lineWidth = 480;
                    texto112.lineHeight = 24;
                    texto112.x = 210;
                    texto112.y = 440;
                    texto112.visible = false; 

        var texto129 = new createjs.Text("O certificado de Milhogênico está mais perto do que nunca. Tenho que me encontrar com o Miguel no supermercado!",txtFont,"#001a00");
            texto129.lineWidth = 480;
            texto129.lineHeight = 24;
            texto129.x = 210;
            texto129.y = 440;
            texto129.visible = false;  

    // Parte 1:
        var texto1 = new createjs.Text("Ah, finalmente consegui me formar! Biotecnologista, quem diria que eu chegaria até aqui…",txtFont,"#001a00");
            texto1.lineWidth = 480;
            texto1.lineHeight = 24;
            texto1.x = 210;
            texto1.y = 465;
            texto1.visible = false;

        var texto2 = new createjs.Text("Agora chegou a hora de pôr em prática tudo que aprendi, vou participar pela primeira vez do processo da criação de um alimento transgênico.",txtFont,"#001a00");
            texto2.lineWidth = 480;
            texto2.lineHeight = 24;
            texto2.x = 210;
            texto2.y = 465;
            texto2.visible = false;

        var texto3 = new createjs.Text("É melhor ligar pra professora antes de ir até laboratório!",txtFont,"#001a00");
            texto3.lineWidth = 480;
            texto3.lineHeight = 24;
            texto3.x = 210;
            texto3.y = 465;
            texto3.visible = false;

        var texto4 = new createjs.Text("Bom dia Miguel, ainda bem que você ligou!",txtFont,"#001a00");
            texto4.lineWidth = 480;
            texto4.lineHeight = 24;
            texto4.x = 210;
            texto4.y = 465;
            texto4.visible = false;

        var texto5 = new createjs.Text("Algum problema professora?",txtFont,"#001a00");
            texto5.lineWidth = 480;
            texto5.lineHeight = 24;
            texto5.x = 210;
            texto5.y = 465;
            texto5.visible = false;

        var texto6 = new createjs.Text("Eu e os outros cientistas ficamos presos em uma cidade vizinha, não vamos conseguir chegar aí a tempo!",txtFont,"#001a00");
            texto6.lineWidth = 480;
            texto6.lineHeight = 24;
            texto6.x = 210;
            texto6.y = 465;
            texto6.visible = false;

        var texto7 = new createjs.Text(" COMO ASSIM?! Quero dizer… A produção do Milho Bt foi cancelada então?",txtFont,"#001a00");
            texto7.lineWidth = 480;
            texto7.lineHeight = 24;
            texto7.x = 210;
            texto7.y = 465;
            texto7.visible = false;

        var texto8 = new createjs.Text("Claro que não! Sei que você é capaz de produzi-lo sozinho!",txtFont,"#001a00");
            texto8.lineWidth = 480;
            texto8.lineHeight = 24;
            texto8.x = 210;
            texto8.y = 465;
            texto8.visible = false;

        var texto9 = new createjs.Text("SOZINHO?! Opa… Claro senhora, vou fazer meu melhor!",txtFont,"#001a00");
            texto9.lineWidth = 480;
            texto9.lineHeight = 24;
            texto9.x = 210;
            texto9.y = 465;
            texto9.visible = false;

        var texto10 = new createjs.Text("Maravilha! Estamos contando com você, se você seguir todos os passos da maneira certa receberá as Insígnias que representarão sua evolução até o prêmio final, o Certificado de Milhogênico.",txtFont,"#001a00");
            texto10.lineWidth = 480;
            texto10.lineHeight = 24;
            texto10.x = 210;
            texto10.y = 450;
            texto10.visible = false;

        var texto11 = new createjs.Text("Qualquer dúvida pode ligar para nossa estagiária, ela pode lhe guiar no processo. Tenho que desligar nos falamos depois!",txtFont,"#001a00");
            texto11.lineWidth = 480;
            texto11.lineHeight = 24;
            texto11.x = 210;
            texto11.y = 465;
            texto11.visible = false;

        var texto12 = new createjs.Text("Até mais… Ué ela desligou! Passar pelo processo todo sozinho? Isso não vai ser nada fácil, melhor ligar para essa estagiária.",txtFont,"#001a00");
            texto12.lineWidth = 480;
            texto12.lineHeight = 24;
            texto12.x = 210;
            texto12.y = 465;
            texto12.visible = false;

        var texto13 = new createjs.Text("Alô?",txtFont,"#001a00");
            texto13.lineWidth = 480;
            texto13.lineHeight = 24;
            texto13.x = 210;
            texto13.y = 465;
            texto13.visible = false;

        var texto14 = new createjs.Text("Georgia?",txtFont,"#001a00");
            texto14.lineWidth = 480;
            texto14.lineHeight = 24;
            texto14.x = 210;
            texto14.y = 465;
            texto14.visible = false;

        var texto15 = new createjs.Text("Quem é?",txtFont,"#001a00");
            texto15.lineWidth = 480;
            texto15.lineHeight = 24;
            texto15.x = 210;
            texto15.y = 465;
            texto15.visible = false;

        var texto16 = new createjs.Text("Sou eu, Miguel! Nós estudamos na mesma universidade, você era de alguns semestres mais avançados.",txtFont,"#001a00");
            texto16.lineWidth = 480;
            texto16.lineHeight = 24;
            texto16.x = 210;
            texto16.y = 465;
            texto16.visible = false;

        var texto17 = new createjs.Text("Ah sim, acho que me lembro. Você deve ser o novo biotecnologista.",txtFont,"#001a00");
            texto17.lineWidth = 480;
            texto17.lineHeight = 24;
            texto17.x = 210;
            texto17.y = 465;
            texto17.visible = false;

        var texto18 = new createjs.Text("Sou eu mesmo.",txtFont,"#001a00");
            texto18.lineWidth = 480;
            texto18.lineHeight = 24;
            texto18.x = 210;
            texto18.y = 465;
            texto18.visible = false;

        var texto19 = new createjs.Text("Ah... Boa sorte então!",txtFont,"#001a00");
            texto19.lineWidth = 480;
            texto19.lineHeight = 24;
            texto19.x = 210;
            texto19.y = 465;
            texto19.visible = false;

        var texto20 = new createjs.Text("Espera! Você poderia me guiar pelo processo, você já deve ter passado por ele mil vezes!",txtFont,"#001a00");
            texto20.lineWidth = 480;
            texto20.lineHeight = 24;
            texto20.x = 210;
            texto20.y = 465;
            texto20.visible = false;

        var texto21 = new createjs.Text("Ah, sim! Pode deixar que eu te ajudo! Assim que chegar no laboratório me ligue novamente!",txtFont,"#001a00");
            texto21.lineWidth = 480;
            texto21.lineHeight = 24;
            texto21.x = 210;
            texto21.y = 465;
            texto21.visible = false;

        var texto22 = new createjs.Text("Lá vamos nós...",txtFont,"#001a00");
            texto22.lineWidth = 480;
            texto22.lineHeight = 24;
            texto22.x = 210;
            texto22.y = 465;
            texto22.visible = false;

    // Parte 2:

        var texto23 = new createjs.Text("Muito bem, antes de entrar no laboratório você deve se vestir adequadamente segundo as normas da CTNBio a Comissão Técnica Nacional de Biossegurança.",txtFont,"#001a00");
            texto23.lineWidth = 480;
            texto23.lineHeight = 24;
            texto23.x = 210;
            texto23.y = 465;
            texto23.visible = false;

        var texto24 = new createjs.Text("Segurança em primeiro lugar!",txtFont,"#001a00");
            texto24.lineWidth = 480;
            texto24.lineHeight = 24;
            texto24.x = 210;
            texto24.y = 465;
            texto24.visible = false;

        var texto25 = new createjs.Text("Exatamente!",txtFont,"#001a00");
            texto25.lineWidth = 480;
            texto25.lineHeight = 24;
            texto25.x = 210;
            texto25.y = 465;
            texto25.visible = false;

        var texto26 = new createjs.Text("A touca é necessária para impedir que os seus cabelos contaminem o experimento que vamos realizar.",txtFont,"#001a00");
            texto26.lineWidth = 480;
            texto26.lineHeight = 24;
            texto26.x = 205;
            texto26.y = 465;
            texto26.visible = false;

        var texto27 = new createjs.Text("As luvas servem para a proteção contra a contaminação do experimento e também impedem que você se contamine.",txtFont,"#001a00");
            texto27.lineWidth = 480;
            texto27.lineHeight = 24;
            texto27.x = 210;
            texto27.y = 465;
            texto27.visible = false;

        var texto28 = new createjs.Text("O jaleco tem que estar fechado, ele serve como uma proteção a mais contra acidentes que podem ocorrer durante os procedimentos.",txtFont,"#001a00");
            texto28.lineWidth = 480;
            texto28.lineHeight = 24;
            texto28.x = 210;
            texto28.y = 465;
            texto28.visible = false;

        var texto29 = new createjs.Text("Não se esqueça dos óculos eles servem para proteção dos olhos contra líquidos ou partículas danosas.",txtFont,"#001a00");
            texto29.lineWidth = 480;
            texto29.lineHeight = 24;
            texto29.x = 210;
            texto29.y = 465;
            texto29.visible = false;

        var texto30 = new createjs.Text("Tudo pronto, podemos seguir em frente! Ah, não se esqueça de pegar sua primeira insígnia, agora você é um Milhogênico em Treinamento!",txtFont,"#001a00");
            texto30.lineWidth = 480;
            texto30.lineHeight = 24;
            texto30.x = 210;
            texto30.y = 465;
            texto30.visible = false;

    // Parte 3:

        var texto31 = new createjs.Text("Muito bem, podemos começar?",txtFont,"#001a00");
            texto31.lineWidth = 480;
            texto31.lineHeight = 24;
            texto31.x = 210;
            texto31.y = 465;
            texto31.visible = false;

        var texto32 = new createjs.Text("Bom... Você pode começar!",txtFont,"#001a00");
            texto32.lineWidth = 480;
            texto32.lineHeight = 24;
            texto32.x = 210;
            texto32.y = 465;
            texto32.visible = false;

        var texto33 = new createjs.Text("Primeiro eu pego uma placa de petri com o meio de cultura na geladeira e depois pego as amostras de planta na casa de vegetação, certo?",txtFont,"#001a00");
            texto33.lineWidth = 480;
            texto33.lineHeight = 24;
            texto33.x = 210;
            texto33.y = 465;
            texto33.visible = false;

        var texto34 = new createjs.Text("Isso aí!",txtFont,"#001a00");
            texto34.lineWidth = 480;
            texto34.lineHeight = 24;
            texto34.x = 210;
            texto34.y = 465;
            texto34.visible = false;

        var texto35 = new createjs.Text("Placa de petri com meio de cultura adquirida com sucesso!",txtFont,"#001a00");
            texto35.lineWidth = 480;
            texto35.lineHeight = 24;
            texto35.x = 210;
            texto35.y = 465;
            texto35.visible = false;

        var texto36 = new createjs.Text("Agora recolha algumas folhas de milho de uma das plantas na casa de vegetação. Se não se lembra, é aquela estante do lado direito!",txtFont,"#001a00");
            texto36.lineWidth = 480;
            texto36.lineHeight = 24;
            texto36.x = 210;
            texto36.y = 465;
            texto36.visible = false;

        var texto37 = new createjs.Text("Folhinhas de milho recolhidas!",txtFont,"#001a00");
            texto37.lineWidth = 480;
            texto37.lineHeight = 24;
            texto37.x = 210;
            texto37.y = 465;
            texto37.visible = false;

        var texto38 = new createjs.Text("Pronto! Agora eu tenho a placa de petri e as folhas coletadas. Vou seguir para o procedimento na câmara de fluxo.",txtFont,"#001a00");
            texto38.lineWidth = 480;
            texto38.lineHeight = 24;
            texto38.x = 210;
            texto38.y = 465;
            texto38.visible = false;

        var texto39 = new createjs.Text("Agora é só cortar a folha em pedacinhos e passá-los para a placa de petri. Fácil, fácil!",txtFont,"#001a00");
            texto39.lineWidth = 480;
            texto39.lineHeight = 24;
            texto39.x = 210;
            texto39.y = 465;
            texto39.visible = false;

        var texto40 = new createjs.Text("Cuidado, se você cortar algo errado vai ter que começar tudo do zero!",txtFont,"#001a00");
            texto40.lineWidth = 480;
            texto40.lineHeight = 24;
            texto40.x = 210;
            texto40.y = 465;
            texto40.visible = false;

        var texto41 = new createjs.Text("SÉRIO?!",txtFont,"#001a00");
            texto41.lineWidth = 480;
            texto41.lineHeight = 24;
            texto41.x = 210;
            texto41.y = 465;
            texto41.visible = false;

        var texto42 = new createjs.Text("Hahaha, brincadeira! Pode começar o procedimento, corte a folha com a lâmina e depois passe o material para a placa de petri usando a pinça.",txtFont,"#001a00");
            texto42.lineWidth = 480;
            texto42.lineHeight = 24;
            texto42.x = 210;
            texto42.y = 465;
            texto42.visible = false;

        var texto43 = new createjs.Text("Tudo cortado e transferido bem direitinho!",txtFont,"#001a00");
            texto43.lineWidth = 480;
            texto43.lineHeight = 24;
            texto43.x = 210;
            texto43.y = 465;
            texto43.visible = false;

        var texto44 = new createjs.Text("Muito bem, vamos pra segunda etapa! Volte para a geladeira e pegue uma placa com micropartículas e a solução com o gene Bt.",txtFont,"#001a00");
            texto44.lineWidth = 480;
            texto44.lineHeight = 24;
            texto44.x = 210;
            texto44.y = 465;
            texto44.visible = false;

        var texto45 = new createjs.Text("O gene Bt é que transformará o milho, certo?",txtFont,"#001a00");
            texto45.lineWidth = 480;
            texto45.lineHeight = 24;
            texto45.x = 210;
            texto45.y = 465;
            texto45.visible = false;

        var texto46 = new createjs.Text("Sim, quando adquiri-lo você poderá ler mais sobre isso no Manual Milhogênico.",txtFont,"#001a00");
            texto46.lineWidth = 480;
            texto46.lineHeight = 24;
            texto46.x = 210;
            texto46.y = 465;
            texto46.visible = false;

        var texto47 = new createjs.Text("Bom, agora eu tenho que ir pra bancada misturar esses dois até eles se tornarem uma solução homogênea.",txtFont,"#001a00");
            texto47.lineWidth = 480;
            texto47.lineHeight = 24;
            texto47.x = 210;
            texto47.y = 465;
            texto47.visible = false;

        var texto48 = new createjs.Text("Arraste a placa com micropartículas e a solução para o erlenmeyer e veja a mistura acontecer. Depois pegue a mistura para continuar o processo.",txtFont,"#001a00");
            texto48.lineWidth = 480;
            texto48.lineHeight = 24;
            texto48.x = 210;
            texto48.y = 465;
            texto48.visible = false;

        var texto49 = new createjs.Text("Agora chegou a minha parte favorita: bombardear a placa de petri com as micropartículas da solução que eu preparei!",txtFont,"#001a00");
            texto49.lineWidth = 480;
            texto49.lineHeight = 24;
            texto49.x = 210;
            texto49.y = 465;
            texto49.visible = false;

        var texto50 = new createjs.Text("E a prática é bem mais legal que a teoria, pode acreditar! Direto para o equipamento biobalístico!",txtFont,"#001a00");
            texto50.lineWidth = 480;
            texto50.lineHeight = 24;
            texto50.x = 210;
            texto50.y = 465;
            texto50.visible = false;

        var texto51 = new createjs.Text("Bom a prática pode ser mais legal, mas também é mais confusa…",txtFont,"#001a00");
            texto51.lineWidth = 480;
            texto51.lineHeight = 24;
            texto51.x = 210;
            texto51.y = 465;
            texto51.visible = false;

        var texto52 = new createjs.Text("Não se preocupe, eu ajudo! Primeiro você preenche a gaveta no topo do equipamento com a mistura que você acabou de preparar.",txtFont,"#001a00");
            texto52.lineWidth = 480;
            texto52.lineHeight = 24;
            texto52.x = 210;
            texto52.y = 465;
            texto52.visible = false;

        var texto53 = new createjs.Text("Certo, agora é só posicionar a placa de petri, ligar a máquina e deixar a magia acontecer certo?",txtFont,"#001a00");
            texto53.lineWidth = 480;
            texto53.lineHeight = 24;
            texto53.x = 210;
            texto53.y = 465;
            texto53.visible = false;

        var texto54 = new createjs.Text("Deixar a ciência acontecer… Mas sim, é basicamente isso, depois espere um tempo para que a plantinha se desenvolva na placa,",txtFont,"#001a00");
            texto54.lineWidth = 480;
            texto54.lineHeight = 24;
            texto54.x = 210;
            texto54.y = 465;
            texto54.visible = false;

        var texto55 = new createjs.Text("e então remova-a do equipamento pondo-a em um tubo de ensaio e retirando algumas folhinhas para a próxima atividade.",txtFont,"#001a00");
            texto55.lineWidth = 480;
            texto55.lineHeight = 24;
            texto55.x = 210;
            texto55.y = 465;
            texto55.visible = false;

    // Parte 4

        var texto56 = new createjs.Text("Hora de testar se meu trabalho está dando certo, vamos ver se eu consegui transformar o milho convencional no milho bt!",txtFont,"#001a00");
            texto56.lineWidth = 480;
            texto56.lineHeight = 24;
            texto56.x = 210;
            texto56.y = 465;
            texto56.visible = false;

        var texto57 = new createjs.Text("Isso mesmo, vá para a bancada e inicie o processo.",txtFont,"#001a00");
            texto57.lineWidth = 480;
            texto57.lineHeight = 24;
            texto57.x = 210;
            texto57.y = 465;
            texto57.visible = false;

        var texto58 = new createjs.Text("Triture as folhas da plantinha que nasceu do meio de cultura bombardeado pelo gene transgênico.",txtFont,"#001a00");
            texto58.lineWidth = 480;
            texto58.lineHeight = 24;
            texto58.x = 210;
            texto58.y = 465;
            texto58.visible = false;

        var texto59 = new createjs.Text("Triturado com sucesso! Nossa, quase esqueci, tenho que buscar as soluções de extração e amplificação de DNA na geladeira!",txtFont,"#001a00");
            texto59.lineWidth = 480;
            texto59.lineHeight = 24;
            texto59.x = 210;
            texto59.y = 465;
            texto59.visible = false;

        var texto60 = new createjs.Text("Vamos voltar para a bancada para continuar!",txtFont,"#001a00");
            texto60.lineWidth = 480;
            texto60.lineHeight = 24;
            texto60.x = 210;
            texto60.y = 465;
            texto60.visible = false;

        var texto61 = new createjs.Text("Dentro desse béquer estão o liquido criado pelas folhas trituradas e a solução de extração de DNA, se eu mexer um pouquinho com o bastão de vidro tenho certeza que elas se separarão deixando as fitas de DNA visíveis para eu pô-las no microtúbulo!",txtFont,"#001a00");
            texto61.lineWidth = 480;
            texto61.lineHeight = 24;
            texto61.x = 210;
            texto61.y = 440;
            texto61.visible = false;

        var texto62 = new createjs.Text("Muito bem, quando a solução estiver separada passe as fitas para o microtúbulo, adicione a solução de amplificação de DNA e feche o microtúbulo.",txtFont,"#001a00");
            texto62.lineWidth = 480;
            texto62.lineHeight = 24;
            texto62.x = 210;
            texto62.y = 465;
            texto62.visible = false;

        var texto63 = new createjs.Text("Agora prepare o termociclador para o funcionamento, ele vai amplificar o DNA modificado para usá-lo no procedimento de eletroforese.",txtFont,"#001a00");
            texto63.lineWidth = 480;
            texto63.lineHeight = 24;
            texto63.x = 210;
            texto63.y = 465;
            texto63.visible = false;

        var texto64 = new createjs.Text("Certo, eu só preciso apertar o botão para abrir a tampa, inserir o microtúbulo, fechá-la mais uma vez e depois ligar, né?",txtFont,"#001a00");
            texto64.lineWidth = 480;
            texto64.lineHeight = 24;
            texto64.x = 210;
            texto64.y = 465;
            texto64.visible = false;

        var texto65 = new createjs.Text("Isso mesmo. Assim a maquina multiplicará o DNA que você inseriu!",txtFont,"#001a00");
            texto65.lineWidth = 480;
            texto65.lineHeight = 24;
            texto65.x = 210;
            texto65.y = 465;
            texto65.visible = false;

        var texto66 = new createjs.Text("Deixe o equipamento trabalhar e siga para a bancada onde a máquina de eletroforese se encontra.",txtFont,"#001a00");
            texto66.lineWidth = 480;
            texto66.lineHeight = 24;
            texto66.x = 210;
            texto66.y = 465;
            texto66.visible = false;

        var texto67 = new createjs.Text("Esse é equipamento de eletroforese certo? É nele que eu vou testar se o o milho realmente é transgênico né?",txtFont,"#001a00");
            texto67.lineWidth = 480;
            texto67.lineHeight = 24;
            texto67.x = 210;
            texto67.y = 465;
            texto67.visible = false;

        var texto68 = new createjs.Text("Isso mesmo, esse liquido que você vê na cuba é chamado solução de agarose, ele virará um gel em pouco tempo. Encaixe o pente que está na bancada na cuba e volte para o termociclador para buscar os microtúbulos multiplicados.",txtFont,"#001a00");
            texto68.lineWidth = 480;
            texto68.lineHeight = 24;
            texto68.x = 210;
            texto68.y = 440;
            texto68.visible = false;

        var texto69 = new createjs.Text("Uau! O termociclador funcionou mesmo! Vamos la acho que a solução de agarose já solidificou..",txtFont,"#001a00");
            texto69.lineWidth = 480;
            texto69.lineHeight = 24;
            texto69.x = 210;
            texto69.y = 465;
            texto69.visible = false;

        var texto70 = new createjs.Text("Use o conta-gotas para despejar a solução dos microtúbulos nos poços de gel de agarose, depois feche a tampa e veja como o processo se desenrola com o equipamento ligado!",txtFont,"#001a00");
            texto70.lineWidth = 480;
            texto70.lineHeight = 24;
            texto70.x = 210;
            texto70.y = 440;
            texto70.visible = false;

        var texto71 = new createjs.Text("As amostras estão indo para o lado positivo!",txtFont,"#001a00");
            texto71.lineWidth = 480;
            texto71.lineHeight = 24;
            texto71.x = 210;
            texto71.y = 465;
            texto71.visible = false;

        var texto72 = new createjs.Text("É mesmo! Mas só há um jeito de saber se é um transgênico de verdade. Abra a tampa e arraste a cuba para dentro do equipamento. A radiação ultravioleta revelará se o seu milho é um milho bt!",txtFont,"#001a00");
            texto72.lineWidth = 480;
            texto72.lineHeight = 24;
            texto72.x = 210;
            texto72.y = 440;
            texto72.visible = false;

        var texto73 = new createjs.Text("Parabéns, você conseguiu, é um transgênico!",txtFont,"#001a00");
            texto73.lineWidth = 480;
            texto73.lineHeight = 24;
            texto73.x = 210;
            texto73.y = 465;
            texto73.visible = false;

        var texto74 = new createjs.Text("UHU!!!",txtFont,"#001a00");
            texto74.lineWidth = 480;
            texto74.lineHeight = 24;
            texto74.x = 210;
            texto74.y = 465;
            texto74.visible = false;

        var texto75 = new createjs.Text(" Agora é a parte final da jornada no laboratório!",txtFont,"#001a00");
            texto75.lineWidth = 480;
            texto75.lineHeight = 24;
            texto75.x = 210;
            texto75.y = 465;
            texto75.visible = false;

        var texto76 = new createjs.Text("Nossa, finalmente! Quero dizer... O que tenho que fazer mesmo?",txtFont,"#001a00");
            texto76.lineWidth = 480;
            texto76.lineHeight = 24;
            texto76.x = 210;
            texto76.y = 465;
            texto76.visible = false;

        var texto77 = new createjs.Text("Nessa parte, você deve voltar a casa de vegetação e plantar as mudas do milho transgênico que você produziu no laboratório, assim elas vão crescer e produzir sementes do milho bt que você deve colher. ",txtFont,"#001a00");
            texto77.lineWidth = 495;
            texto77.lineHeight = 24;
            texto77.x = 210;
            texto77.y = 440;
            texto77.visible = false;

        var texto78 = new createjs.Text("Sementes colhidas! Vou envia-las para a fazenda agora!",txtFont,"#001a00");
            texto78.lineWidth = 480;
            texto78.lineHeight = 24;
            texto78.x = 210;
            texto78.y = 465;
            texto78.visible = false;

        var texto79 = new createjs.Text("Parabéns, você está conseguindo evoluir bastante! Como prêmio pelo trabalho, você ganhou a próxima insígnia!",txtFont,"#001a00");
            texto79.lineWidth = 480;
            texto79.lineHeight = 24;
            texto79.x = 210;
            texto79.y = 465;
            texto79.visible = false;

        var texto80 = new createjs.Text("Uau! O trabalho no laboratório foi complicado, mas valeu a pena. Consegui minha segunda insígnia, e não posso perder tempo! Melhor me apressar e seguir para a fazenda.",txtFont,"#001a00");
            texto80.lineWidth = 480;
            texto80.lineHeight = 24;
            texto80.x = 210;
            texto80.y = 440;
            texto80.visible = false;

    // Parte 5:
        var texto81 = new createjs.Text("Bom dia Georgia! Já estou na fazenda.",txtFont,"#001a00");
            texto81.lineWidth = 480;
            texto81.lineHeight = 24;
            texto81.x = 210;
            texto81.y = 465;
            texto81.visible = false;

        var texto82 = new createjs.Text("Ótimo, olhe as sementes que produzimos no laboratório.",txtFont,"#001a00");
            texto82.lineWidth = 480;
            texto82.lineHeight = 24;
            texto82.x = 210;
            texto82.y = 465;
            texto82.visible = false;

        var texto83 = new createjs.Text("São diferentes, algumas produzirão o milho convencional e as outras produzirão o milho bt, que é o milho transgênico",txtFont,"#001a00");
            texto83.lineWidth = 480;
            texto83.lineHeight = 24;
            texto83.x = 210;
            texto83.y = 465;
            texto83.visible = false;

        var texto84 = new createjs.Text("Exatamente! E elas não vão se plantar sozinhas, ao trabalho!",txtFont,"#001a00");
            texto84.lineWidth = 480;
            texto84.lineHeight = 24;
            texto84.x = 210;
            texto84.y = 465;
            texto84.visible = false;

        var texto85 = new createjs.Text("Pronto, o milho Bt já foi plantado. Agora só falta plantar o milho Convencional.",txtFont,"#001a00");
            texto85.lineWidth = 480;
            texto85.lineHeight = 24;
            texto85.x = 210;
            texto85.y = 465;
            texto85.visible = false;

        var texto86 = new createjs.Text("Pronto, o milho Convencional já foi plantado. Agora só falta plantar o milho Bt.",txtFont,"#001a00");
            texto86.lineWidth = 480;
            texto86.lineHeight = 24;
            texto86.x = 210;
            texto86.y = 465;
            texto86.visible = false;

        var texto87 = new createjs.Text("Hum... Acho melhor plantar as sementes de milho Bt nesse lote!",txtFont,"#001a00");
            texto87.lineWidth = 480;
            texto87.lineHeight = 24;
            texto87.x = 210;
            texto87.y = 465;
            texto87.visible = false;

        var texto88 = new createjs.Text("Hum... Acho melhor plantar as sementes de milho Convencional nesse lote!",txtFont,"#001a00");
            texto88.lineWidth = 480;
            texto88.lineHeight = 24;
            texto88.x = 210;
            texto88.y = 465;
            texto88.visible = false;

        var texto89 = new createjs.Text("Últimas sementes plantadas! Agora é só esperar o crescimento.",txtFont,"#001a00");
            texto89.lineWidth = 480;
            texto89.lineHeight = 24;
            texto89.x = 210;
            texto89.y = 465;
            texto89.visible = false;

        var texto90 = new createjs.Text("E aí? Os milhos cresceram direitinho?",txtFont,"#001a00");
            texto90.lineWidth = 480;
            texto90.lineHeight = 24;
            texto90.x = 210;
            texto90.y = 465;
            texto90.visible = false;

        var texto91 = new createjs.Text("Mais ou menos, os milhos transgênicos cresceram bem, mas os milhos convencionais...",txtFont,"#001a00");
            texto91.lineWidth = 480;
            texto91.lineHeight = 24;
            texto91.x = 210;
            texto91.y = 465;
            texto91.visible = false;

        var texto92 = new createjs.Text("Algum problema com as sementes?",txtFont,"#001a00");
            texto92.lineWidth = 480;
            texto92.lineHeight = 24;
            texto92.x = 210;
            texto92.y = 465;
            texto92.visible = false;

        var texto93 = new createjs.Text("Com as sementes não, mas as espigas foram atacadas por pragas e acho que estão completamente perdidas! Eu vou ser demitido, não vou conseguir meu certificado e minha carreira vai acabar...",txtFont,"#001a00");
            texto93.lineWidth = 480;
            texto93.lineHeight = 24;
            texto93.x = 210;
            texto93.y = 440;
            texto93.visible = false;

        var texto94 = new createjs.Text("Calma Miguel!!! Tá tudo certo. O milho convencional é plantado junto ao milho bt para que as pragas não se adaptem e fiquem mais fortes ao atacar o alimento mais resistente.",txtFont,"#001a00");
            texto94.lineWidth = 480;
            texto94.lineHeight = 24;
            texto94.x = 210;
            texto94.y = 440;
            texto94.visible = false;

        var texto95 = new createjs.Text("Ah, é mesmo!",txtFont,"#001a00");
            texto95.lineWidth = 480;
            texto95.lineHeight = 24;
            texto95.x = 210;
            texto95.y = 465;
            texto95.visible = false;

        var texto96 = new createjs.Text("Já acionei o pessoal que vai levar as espigas de milho pra próxima etapa, eles já devem estar chegando.",txtFont,"#001a00");
            texto96.lineWidth = 480;
            texto96.lineHeight = 24;
            texto96.x = 210;
            texto96.y = 465;
            texto96.visible = false;

        var texto97 = new createjs.Text("A próxima fase é a indústria, certo?",txtFont,"#001a00");
            texto97.lineWidth = 480;
            texto97.lineHeight = 24;
            texto97.x = 210;
            texto97.y = 465;
            texto97.visible = false;

        var texto98 = new createjs.Text("Exatamente, mas você não está esquecendo de algo?",txtFont,"#001a00");
            texto98.lineWidth = 480;
            texto98.lineHeight = 24;
            texto98.x = 210;
            texto98.y = 465;
            texto98.visible = false;

        var texto99 = new createjs.Text("O QUE FOI? O QUE EU ESQUECI?!",txtFont,"#001a00");
            texto99.lineWidth = 480;
            texto99.lineHeight = 24;
            texto99.x = 210;
            texto99.y = 465;
            texto99.visible = false;

        var texto100 = new createjs.Text("Sua insígnia!",txtFont,"#001a00");
            texto100.lineWidth = 480;
            texto100.lineHeight = 24;
            texto100.x = 210;
            texto100.y = 465;
            texto100.visible = false;

        var texto101 = new createjs.Text("É verdade!",txtFont,"#001a00");
            texto101.lineWidth = 480;
            texto101.lineHeight = 24;
            texto101.x = 210;
            texto101.y = 465;
            texto101.visible = false;

    // Parte 6:

        var texto114 = new createjs.Text("Estou me aproximando do final do processo, quero ver logo o que vai acontecer na indústria!",txtFont,"#001a00");
            texto114.lineWidth = 480;
            texto114.lineHeight = 24;
            texto114.x = 210;
            texto114.y = 465;
            texto114.visible = false;

        var texto115 = new createjs.Text("Aqui é a fábrica onde o milho que você produziu será transformado em um produto.",txtFont,"#001a00");
            texto115.lineWidth = 480;
            texto115.lineHeight = 24;
            texto115.x = 210;
            texto115.y = 465;
            texto115.visible = false;

        var texto116 = new createjs.Text("Em um produto? Como o que?",txtFont,"#001a00");
            texto116.lineWidth = 480;
            texto116.lineHeight = 24;
            texto116.x = 210;
            texto116.y = 465;
            texto116.visible = false;

        var texto117 = new createjs.Text("Nesse caso o milho bt será transformado em salgadinhos crocantes de milho!",txtFont,"#001a00");
            texto117.lineWidth = 480;
            texto117.lineHeight = 24;
            texto117.x = 210;
            texto117.y = 465;
            texto117.visible = false;

        var texto118 = new createjs.Text("Como os que a gente vê nos supermercados?!",txtFont,"#001a00");
            texto118.lineWidth = 480;
            texto118.lineHeight = 24;
            texto118.x = 210;
            texto118.y = 465;
            texto118.visible = false;

        var texto119 = new createjs.Text("Esses mesmos.",txtFont,"#001a00");
            texto119.lineWidth = 480;
            texto119.lineHeight = 24;
            texto119.x = 210;
            texto119.y = 465;
            texto119.visible = false;

        var texto120 = new createjs.Text("Eu amo esses salgadinhos! Será que eu posso pegar uma provinha?",txtFont,"#001a00");
            texto120.lineWidth = 480;
            texto120.lineHeight = 24;
            texto120.x = 210;
            texto120.y = 465;
            texto120.visible = false;

        var texto121 = new createjs.Text("Claro que pode! Mas vai ser descontado do seu salário...",txtFont,"#001a00");
            texto121.lineWidth = 480;
            texto121.lineHeight = 24;
            texto121.x = 210;
            texto121.y = 465;
            texto121.visible = false;

        var texto122 = new createjs.Text("Ah... então deixa pra lá.",txtFont,"#001a00");
            texto122.lineWidth = 480;
            texto122.lineHeight = 24;
            texto122.x = 210;
            texto122.y = 465;
            texto122.visible = false;

        var texto123 = new createjs.Text("Utilize a máquina para inicializar o processo da criação do salgadinho.",txtFont,"#001a00");
            texto123.lineWidth = 480;
            texto123.lineHeight = 24;
            texto123.x = 210;
            texto123.y = 465;
            texto123.visible = false;

        var texto124 = new createjs.Text("Ah! Eu preciso de um desses pacotes!!!",txtFont,"#001a00");
            texto124.lineWidth = 480;
            texto124.lineHeight = 24;
            texto124.x = 210;
            texto124.y = 465;
            texto124.visible = false;

        var texto125 = new createjs.Text("Você pode comprar um quando eles chegarem as prateleiras.",txtFont,"#001a00");
            texto125.lineWidth = 480;
            texto125.lineHeight = 24;
            texto125.x = 210;
            texto125.y = 465;
            texto125.visible = false;

        var texto126 = new createjs.Text("Legal! Acho que terminamos por aqui.",txtFont,"#001a00");
            texto126.lineWidth = 480;
            texto126.lineHeight = 24;
            texto126.x = 210;
            texto126.y = 465;
            texto126.visible = false;

        var texto127 = new createjs.Text("Terminamos sim. Aqui está o reconhecimento por ter passado por mais uma etapa...",txtFont,"#001a00");
            texto127.lineWidth = 480;
            texto127.lineHeight = 24;
            texto127.x = 210;
            texto127.y = 465;
            texto127.visible = false;

    // Parte 7:
        var texto128 = new createjs.Text("O certificado de Milhogênico está mais perto do que nunca. Tenho que me encontrar com a Georgia no supermercado!",txtFont,"#001a00");
            texto128.lineWidth = 480;
            texto128.lineHeight = 24;
            texto128.x = 210;
            texto128.y = 440;
            texto128.visible = false;

        var texto130 = new createjs.Text("A última etapa para se tornar um verdadeiro milhogênico é ver o resultado do seu próprio trabalho. Você passou por todas as etapas com eficiência e alcançou produzir o milho bt da maneira correta e assim produziu um produto de qualidade. Você é um verdadeiro milhogênico!",txtFont,"#001a00");
            texto130.lineWidth = 480;
            texto130.lineHeight = 24;
            texto130.x = 210;
            texto130.y = 430;
            texto130.visible = false;

    

    var vetorTexto1 = [texto1, texto2, texto3, texto4, texto5, texto6, texto7, texto8, texto9, texto10,texto11, texto12, texto13, texto14, texto15, texto16, texto17, texto18, texto19, texto20, texto21, texto22];
    var vetorTexto1b = [texto1, texto2, texto3, texto102, texto5, texto6, texto7, texto103, texto113, texto10, texto104, texto12, texto13, texto106, texto15, texto107, texto108, texto109, texto19, texto20, texto21, texto22];
    var vetorTexto2 = [texto23, texto24, texto25, texto26, texto27, texto28, texto29, texto30];
    var vetorTexto3 = [texto31, texto32, texto33, texto34];
    var vetorTexto4 = [texto39, texto40, texto41, texto42];
    var vetorTexto5 = [texto44, texto45, texto46];
    var vetorTexto6 = [texto49, texto50];
    var vetorTexto7 = [texto51, texto52];
    var vetorTexto8 = [texto53, texto54, texto55];
    var vetorTexto9 = [texto56, texto57];
    var vetorTexto10 = [texto61, texto62];
    var vetorTexto11 = [texto64, texto65];
    var vetorTexto12 = [texto67, texto68];
    var vetorTexto13 = [texto75, texto76, texto77];
    var vetorTexto14 = [texto81, texto82, texto83, texto84];
    var vetorTexto14b = [texto110, texto82, texto83, texto84];
    var vetorTexto15 = [texto90, texto91, texto92, texto93, texto94, texto95, texto96];
    var vetorTexto15b = [texto90, texto91, texto92, texto111, texto112, texto95, texto96];
    var vetorTexto16 = [texto97, texto98, texto99, texto100, texto101];
    var vetorTexto17 = [texto115, texto116, texto117, texto118, texto119, texto120, texto121, texto122, texto123];
    var vetorTexto18 = [texto124, texto125, texto126, texto127];

    stage.addChild(texto1, texto2, texto3, texto4, texto5, texto6, texto7, texto8, texto9, texto10,texto11, texto12, texto13, texto14, texto15, texto16, texto17, texto18, texto19, texto20, texto21, texto22,
        texto23, texto24, texto25, texto26, texto27, texto28, texto29, texto30, texto31, texto32, texto33, texto34, texto35, texto36, texto37, texto38, texto39, texto40, texto41, texto42, texto43, texto44,
        texto45, texto46, texto47, texto48, texto49, texto50, texto51, texto52, texto53, texto54, texto55, texto56, texto57, texto58, texto59, texto60, texto61, texto62, texto63, texto64, texto65, texto66, 
        texto67, texto68, texto69, texto70, texto71, texto72, texto73, texto74, texto75, texto76, texto77, texto78, texto79, texto80, texto81, texto82, texto83, texto84, texto85, texto86, texto87, texto88,
        texto89, texto90, texto91, texto92, texto93, texto94, texto95, texto96, texto97, texto98, texto99, texto100, texto101, texto102, texto103, texto104, texto105, texto106, texto107, texto108, texto109,
        texto110, texto111, texto112, texto113,  texto114, texto115, texto116, texto117, texto118, texto119, texto120, texto121, texto122, texto123, texto124, texto125, texto126, texto127, texto128, texto129,
        texto130, voceSabiaContainer, badgesContainer);

    function cena1 () {
        if (escolhaPersonagem == 2) {
            if (contaTexto == 0) {
                phaseoutin(selecPersonContainer, mapaContainer);
                mapaContainer.visible = true;
                mapaContainer.alpha = 0;
                passarFalaBt.alpha = 0;
                createjs.Tween.get(passarFalaBt).wait(500).to({alpha:1},500);
            }

            if (contaTexto!=0) {
                vetorTexto1[contaTexto-1].visible = false;
            };

            garotoBrilho.visible = false;
            garotaBrilho.visible = false;
            
            passarFalaBt.visible = true;
            vetorTexto1[contaTexto].visible = true;

            texto1.alpha = 0;
            createjs.Tween.get(texto1).wait(500).to({alpha:1},500);

            predioFazenda.visible = false;
            predioFabrica.visible = false;
            predioSupermercado.visible = false;
            predioLabCompleto.visible = false;
            predioFazendaCompleto.visible = false;
            predioFabricaCompleto.visible = false;
            predioSupermercadoCompleto.visible = false;

            passarFalaBt.addEventListener("click", avancaFala1);
            
            vetorTexto1[contaTexto].visible = true;
            createjs.Tween.get(vetorTexto1).wait(500).to({alpha:1},500)

        } else {
            if (contaTexto == 0) {
            phaseoutin(selecPersonContainer, mapaContainer);
            mapaContainer.visible = true;
            mapaContainer.alpha = 0;
            passarFalaBt.alpha = 0;
            createjs.Tween.get(passarFalaBt).wait(500).to({alpha:1},500);
            }

            if (contaTexto!=0) {
                vetorTexto1b[contaTexto-1].visible = false;
            };
            
            passarFalaBt.visible = true;
            vetorTexto1b[contaTexto].visible = true;

            texto1.alpha = 0;
            createjs.Tween.get(texto1).wait(500).to({alpha:1},500);

            predioFazenda.visible = false;
            predioFabrica.visible = false;
            predioSupermercado.visible = false;
            predioLabCompleto.visible = false;
            predioFazendaCompleto.visible = false;
            predioFabricaCompleto.visible = false;
            predioSupermercadoCompleto.visible = false;

            passarFalaBt.addEventListener("click", avancaFala1);
            
            vetorTexto1b[contaTexto].visible = true;
            createjs.Tween.get(vetorTexto1b).wait(500).to({alpha:1},500)
        }
        
        
        switch(contaTexto) {
            case 0:
                caixaGaroto.visible = true;
                caixaGaroto.alpha = 0;
                createjs.Tween.get(caixaGaroto).wait(500).to({alpha:1},500);
                caixaGarota.visible = false; 
            break;
            case 3:
                caixaGaroto.visible = false;
                caixaGarota.visible = false;
                caixaDoutora.visible = true;
            break;
            case 4:
                caixaGaroto.visible = true;
                caixaGarota.visible = false;
                caixaDoutora.visible = false;
            break;
            case 5:
                caixaGaroto.visible = false;
                caixaGarota.visible = false;
                caixaDoutora.visible = true;
            break;
            case 6:
                caixaGaroto.visible = true;
                caixaGarota.visible = false;
                caixaDoutora.visible = false;
            break;
            case 7:
                caixaGaroto.visible = false;
                caixaGarota.visible = false;
                caixaDoutora.visible = true;
            break;
            case 8:
                caixaGaroto.visible = true;
                caixaGarota.visible = false;
                caixaDoutora.visible = false;
            break;
            case 9:
                caixaGaroto.visible = false;
                caixaGarota.visible = false;
                caixaDoutora.visible = true;
            break;
            case 11:
                caixaGaroto.visible = true;
                caixaGarota.visible = false;
                caixaDoutora.visible = false;
            break;
            case 12:
                caixaGaroto.visible = false;
                caixaGarota.visible = true; 
            break;
            case 13:
                caixaGaroto.visible = true;
                caixaGarota.visible = false; 
            break;
            case 14:
                caixaGaroto.visible = false;
                caixaGarota.visible = true; 
            break;
            case 15:
                caixaGaroto.visible = true;
                caixaGarota.visible = false; 
            break;
            case 16:
                caixaGaroto.visible = false;
                caixaGarota.visible = true; 
            break;
            case 17:
                caixaGaroto.visible = true;
                caixaGarota.visible = false; 
            break;
            case 18:
                caixaGaroto.visible = false;
                caixaGarota.visible = true; 
            break;
            case 19:
                caixaGaroto.visible = true;
                caixaGarota.visible = false; 
            break;
            case 20:
                caixaGaroto.visible = false;
                caixaGarota.visible = true; 
            break;
            case 21:
                caixaGaroto.visible = true;
                caixaGarota.visible = false; 
            break;

        };
    }

    function avancaFala1() {
        if (contaTexto!=21) {
            contaTexto++;
            cena1();
        } else {
            texto22.visible = false;
            mapa();
        }
    }

    function cena2(){
        if (contaTexto == 0) {
            phaseoutin(mapaContainer, trocaRoupaContainer);
            trocaRoupaContainer.visible = true;
            trocaRoupaContainer.alpha = 0;
            passarFalaBt.alpha = 0;
            createjs.Tween.get(passarFalaBt).wait(500).to({alpha:1},500);
        }

        if (contaTexto!=0) {
            vetorTexto2[contaTexto-1].visible = false;
        };

        armario.visible = true;
        jalecoArmario.visible = true;
        luvasArmario.visible = true;
        oculosArmario.visible = true;
        toucaArmario.visible = true;
        jalecoVestir.visible = false;
        luvasVestir.visible = false;
        oculosVestir.visible = false;
        cabecaGarota.visible = false;
        corpoGarota.visible = false;
        cabecaGaroto.visible = false;
        corpoGaroto.visible = false;
        cabecaGarotaCTouca.visible = false;
        cabecaGarotoCTouca.visible = false;
        vcSabiaBt.visible = false;
        badgeBt.visible = false;

        if (escolhaPersonagem == 1) {
            cabecaGarota.visible = true;
            corpoGarota.visible = true;
        } else if (escolhaPersonagem == 2) {
            cabecaGaroto.visible = true;
            corpoGaroto.visible = true;
        };

        texto23.alpha = 0;
        createjs.Tween.get(texto23).wait(500).to({alpha:1},500);
        
        passarFalaBt.visible = true;
        vetorTexto2[contaTexto].visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", avancaFala2);

        createjs.Tween.get(texto23).wait(500).to({alpha:1},500);
        
        
        switch(contaTexto) {
            case 0:
                caixaGarota.visible = true;
                caixaGarota.alpha = 0;
                createjs.Tween.get(caixaGarota).wait(500).to({alpha:1},500)
                caixaGaroto.visible = false; 
            break;
            case 1:
                caixaGarota.visible = false;
                caixaGaroto.visible = true; 
            break;
            case 2:
                caixaGarota.visible = true;
                caixaGaroto.visible = false; 
            break;

        };
    }

    function avancaFala2() {
        if (contaTexto!=2) {
            contaTexto++;
            cena2();
        } else {
            texto25.visible = false;
            trocaDeRoupa();
        }
    }

    function falaTouca() {
        texto26.visible = true;
        texto27.visible = false;
        texto28.visible = false;
        texto29.visible = false;
        caixaGaroto.visible = true;
        caixaGarota.visible = false;
    }

    function falaLuvas() {
        texto27.visible = true;
        texto26.visible = false;
        texto28.visible = false;
        texto29.visible = false;
        caixaGaroto.visible = false;
        caixaGarota.visible = true;
    }

    function falaJaleco() {
        texto28.visible = true;
        texto26.visible = false;
        texto27.visible = false;
        texto29.visible = false;
        caixaGaroto.visible = true;
        caixaGarota.visible = false;
    }

    function falaOculos() {
        texto29.visible = true;
        texto26.visible = false;
        texto27.visible = false;
        texto28.visible = false;
        caixaGaroto.visible = false;
        caixaGarota.visible = true;
    }

    function falaRoupas() {
        texto27.visible = false;
        texto26.visible = false;
        texto28.visible = false;
        texto29.visible = false;
        texto30.visible = true;
        caixaGaroto.visible = false;
        caixaGarota.visible = true;
        passarFalaBt.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", primeiraBadge);
    }

    function cena3() {
        if (contaTexto == 0) {
            phaseoutin(trocaRoupaContainer, fase1Container);
            fase1Container.visible = true;
            fase1Container.alpha = 0;
            passarFalaBt.alpha = 0;
            createjs.Tween.get(passarFalaBt).wait(500).to({alpha:1},500);
        }

        if (contaTexto!=0) {
            vetorTexto3[contaTexto-1].visible = false;
        };
        
        passarFalaBt.visible = true;
        vetorTexto3[contaTexto].visible = true;

        texto31.alpha = 0;
        createjs.Tween.get(texto31).wait(500).to({alpha:1},500);

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", avancaFala3);

        switch(contaTexto) {
            case 0:
                caixaGaroto.visible = true;
                caixaGaroto.alpha = 0;
                createjs.Tween.get(caixaGaroto).wait(500).to({alpha:1},500)
                caixaGarota.visible = false; 
            break;
            case 1:
                caixaGaroto.visible = false;
                caixaGarota.visible = true; 
            break;
            case 2:
                caixaGaroto.visible = true;
                caixaGarota.visible = false; 
            break;
            case 3:
                caixaGaroto.visible = false;
                caixaGarota.visible = true; 
            break;

        };
    }

    function avancaFala3() {
        if (contaTexto!=3) {
            contaTexto++;
            cena3();
        } else {
            texto34.visible = false;
            fase1();
        }
    }

    function falaPlacaPetri() {
        texto35.visible = true;
        caixaGaroto.visible = true;
        caixaGarota.visible = false;
        passarFalaBt.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto35.visible = false;
            falaVegetacao1();});
    }

    function falaVegetacao1() {
        geladeira1Container.visible = false;
        geladeiraAberta.visible = false;
        fase1Container.visible = true;
        texto36.visible = true;
        caixaGarota.visible = true;
        caixaGaroto.visible = false;
        passarFalaBt.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto36.visible = false;
            voltarfase1();});
    }

    function falaFolhas() {
        texto37.visible = true;
        caixaGaroto.visible = true;
        caixaGarota.visible = false;
        passarFalaBt.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto37.visible = false;
            falaFluxo();});
    }

    function falaFluxo() {
        cVegetacao1Container.visible = false;
        fase1Container.visible = true;
        texto38.visible = true;
        caixaGarota.visible = false;
        caixaGaroto.visible = true;
        passarFalaBt.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto38.visible = false;
            voltarfase1();});
    }

    function cena4() {
        fase1Container.visible = false;
        cFluxoContainer.visible = true;
        corte1.visible = false;
        corte2.visible = false;
        corte3.visible = false;
        corte4.visible = false;
        pinca.visible = false;
        pincaPlanta.visible = false;
        meioCulturaPlanta.visible = false;
        placa.visible = false;

        if (contaTexto!=0) {
            vetorTexto4[contaTexto-1].visible = false;
        };

        passarFalaBt.visible = true;
        vetorTexto4[contaTexto].visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", avancaFala4);

        switch(contaTexto) {
            case 0:
                caixaGaroto.visible = true;
                caixaGarota.visible = false; 
            break;
            case 1:
                caixaGaroto.visible = false;
                caixaGarota.visible = true; 
            break;
            case 2:
                caixaGaroto.visible = true;
                caixaGarota.visible = false; 
            break;
            case 3:
                caixaGaroto.visible = false;
                caixaGarota.visible = true; 
            break;

        };
    }

    function avancaFala4() {
        if (contaTexto!=3) {
            contaTexto++;
            cena4();
        } else {
            texto42.visible = false;
            contaTexto = 0;
            caixaGarota.visible = false;
            caixaGaroto.visible = false;
            passarFalaBt.visible = false;
            camFluxoAberta();
        }
    }

    function falaMeioCultura(){
        texto43.visible = true;
        caixaGarota.visible = false;
        caixaGaroto.visible = true;
        passarFalaBt.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto43.visible = false;
            cena5();});
    }

    function cena5() {
        fase1Container.visible = true;
        cFluxoContainer.visible = false;

        if (contaTexto!=0) {
            vetorTexto5[contaTexto-1].visible = false;
        };

        passarFalaBt.visible = true;
        vetorTexto5[contaTexto].visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", avancaFala5);

        switch(contaTexto) {
            case 0:
                caixaGarota.visible = true;
                caixaGaroto.visible = false; 
            break;
            case 1:
                caixaGarota.visible = false;
                caixaGaroto.visible = true; 
            break;
            case 2:
                caixaGarota.visible = true;
                caixaGaroto.visible = false; 
            break;
        };
    }

    function avancaFala5() {
        if (contaTexto!=2) {
            contaTexto++;
            cena5();
        } else {
            texto46.visible = false;
            voltarfase1();
        }
    }

    function falaGela2() {
        texto47.visible = true;
        caixaGarota.visible = false;
        caixaGaroto.visible = true;
        passarFalaBt.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto47.visible = false;
            voltarfase1();});
    }

    function falaMistura() {
        fase1Container.visible = false;
        bancada1Container.visible = true;
        bancadaFundo.visible = true;
        texto48.visible = true;
        caixaGarota.visible = true;
        caixaGaroto.visible = false;
        passarFalaBt.visible = true;

        erlen1.visible = true;
        erlen2.visible = false;
        erlen3.visible = false;
        erlen4.visible = false;
        erlen5.visible = false;
        erlen6.visible = false;
        erlen7.visible = false;
        erlen8.visible = false;
        placaMicropartBanc.visible = false;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto48.visible = false;
            bancadaAberta1();});
    }

    function cena6() {
        fase1Container.visible = true;
        bancada1Container.visible = false;
        bancadaFundo.visible = false;

        if (contaTexto!=0) {
            vetorTexto6[contaTexto-1].visible = false;
        };

        passarFalaBt.visible = true;
        vetorTexto6[contaTexto].visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", avancaFala6);

        switch(contaTexto) {
            case 0:
                caixaGaroto.visible = true;
                caixaGarota.visible = false; 
            break;
            case 1:
                caixaGaroto.visible = false;
                caixaGarota.visible = true; 
            break;
        };
    }

    function avancaFala6() {
        if (contaTexto!=1) {
            contaTexto++;
            cena6();
        } else {
            texto50.visible = false;
            voltarfase1();
        }
    }

    function cena7() {
        fase1Container.visible = false;
        biobalisticaContainer.visible = true;

        botaoLigaBiobalisticaPress.visible = false;
        portaFechada.visible = false;
        biobalisticaPlacaExplPeq.visible = false;
        biobalisticaEfeito.visible = false;
        biobalisticaMaquinaCheia.visible = false;
        biobalisticaPlacaExpl.visible = false;
        placaPlanta.visible = true;
        placaPlanta.alpha = 0;
        tuboEnsaio.visible = false;
        tuboSemFolha.visible = false;

        if (contaTexto!=0) {
            vetorTexto7[contaTexto-1].visible = false;
        };

        passarFalaBt.visible = true;
        vetorTexto7[contaTexto].visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", avancaFala7);

        switch(contaTexto) {
            case 0:
                caixaGaroto.visible = true;
                caixaGarota.visible = false; 
            break;
            case 1:
                caixaGaroto.visible = false;
                caixaGarota.visible = true; 
            break;
        };
    }

    function avancaFala7() {
        if (contaTexto!=1) {
            contaTexto++;
            cena7();
        } else {
            texto52.visible = false;
            biobalisticaAberta();
        }
    }

    function cena8() {
        biobalisticaMaquinaCheia.visible = true;

        if (contaTexto!=0) {
            vetorTexto8[contaTexto-1].visible = false;
        };

        passarFalaBt.visible = true;
        vetorTexto8[contaTexto].visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", avancaFala8);

        switch(contaTexto) {
            case 0:
                caixaGaroto.visible = true;
                caixaGarota.visible = false; 
            break;
            case 1:
                caixaGaroto.visible = false;
                caixaGarota.visible = true; 
            break;
        };
    }

    function avancaFala8() {
        if (contaTexto!=2) {
            contaTexto++;
            cena8();
        } else {
            texto55.visible = false;
            biobalisticaAberta();
        }
    }

    function cena9() {
        fase1Container.visible = true;
        biobalisticaContainer.visible = false;
        continuarBotao.visible = false;

        if (contaTexto!=0) {
            vetorTexto9[contaTexto-1].visible = false;
        };

        passarFalaBt.visible = true;
        vetorTexto9[contaTexto].visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", avancaFala9);

        switch(contaTexto) {
            case 0:
                caixaGaroto.visible = true;
                caixaGarota.visible = false; 
            break;
            case 1:
                caixaGaroto.visible = false;
                caixaGarota.visible = true; 
            break;
        };
    }

    function avancaFala9() {
        if (contaTexto!=1) {
            contaTexto++;
            cena9();
        } else {
            texto57.visible = false;
            voltarfase1();
        }
    }

    function falaTriture() {
        caixaGaroto.visible = false;
        caixaGarota.visible = true;
        passarFalaBt.visible = true;
        texto58.visible = true;

        fase1Container.visible = false;
        escurecer.visible = true;
        bancada2Container.visible = true;
        bancadaFundo.visible = true;
        almofariz1.visible = false;
        almofariz2.visible = false;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto58.visible = false;
            bancadaAberta2();});
    }

    function falaTriturado() {
        caixaGarota.visible = false;
        caixaGaroto.visible = true;
        passarFalaBt.visible = true;
        texto59.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto59.visible = false;
            voltarfase1();});
    }

    function falaVoltaBanc() {
        caixaGarota.visible = true;
        caixaGaroto.visible = false;
        passarFalaBt.visible = true;
        texto60.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto60.visible = false;
            voltarfase1();});
    }

    function cena10() {
            fase1Container.visible = false;
            bancada3Container.visible = true;
            bancadaFundo.visible = true;
            bastaoVidro.visible = true;
            bastaoFitas.visible = false;
            bastaoSFitas.visible = false;
            micropipeta1.visible = false;
            micropipeta2.visible = false;
            micropipeta3.visible = false;
            micropipeta4.visible = false;
            microtubulo1.visible = true;
            microtubulo2.visible = false;
            microtubulo3.visible = false;
            microtubulo4.visible = false;
            solucDnaBanc.visible = true;

            if (contaTexto!=0) {
                vetorTexto10[contaTexto-1].visible = false;
            };

            passarFalaBt.visible = true;
            vetorTexto10[contaTexto].visible = true;

            passarFalaBt.removeAllEventListeners();
            passarFalaBt.addEventListener("click", avancaFala10);

            switch(contaTexto) {
                case 0:
                    caixaGaroto.visible = true;
                    caixaGarota.visible = false; 
                break;
                case 1:
                    caixaGaroto.visible = false;
                    caixaGarota.visible = true; 
                break;
            };
    }

    function avancaFala10() {
        if (contaTexto!=1) {
            contaTexto++;
            cena10();
        } else {
            texto62.visible = false;
            bancadaAberta3();
        }
    }

    function falaTermo() {
        bancada3Container.visible = false;
        fase1Container.visible. true;
        caixaGarota.visible = true;
        caixaGaroto.visible = false;
        passarFalaBt.visible = true;
        texto63.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto63.visible = false;
            voltarfase1();});
    }

    function cena11() {
            fase1Container.visible = false;
            termocicladorContainer.visible = true;

            termocicladorTampa.visible = false;
            botaoLigarTermoPress.visible = false;
            botaoAbrirTermoPress.visible = false;
            microtubuloTermo.visible = false;

            if (contaTexto!=0) {
                vetorTexto11[contaTexto-1].visible = false;
            };

            passarFalaBt.visible = true;
            vetorTexto11[contaTexto].visible = true;

            passarFalaBt.removeAllEventListeners();
            passarFalaBt.addEventListener("click", avancaFala11);

            switch(contaTexto) {
                case 0:
                    caixaGaroto.visible = true;
                    caixaGarota.visible = false; 
                break;
                case 1:
                    caixaGaroto.visible = false;
                    caixaGarota.visible = true; 
                break;
            };
    }

    function avancaFala11() {
        if (contaTexto!=1) {
            contaTexto++;
            cena11();
        } else {
            texto65.visible = false;
            termocicladorAberto1();
        }
    }

    function falaTermoFim() {
        caixaGarota.visible = true;
        caixaGaroto.visible = false;
        passarFalaBt.visible = true;
        texto66.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto66.visible = false;
            voltarfase1();});
    }

    function cena12() {
            fase1Container.visible = false;
            eletroforeseContainer.visible = true;

            contaGotaCheio.visible = false;
            microtubulosCheios.visible = false;
            microtubulosVazios.visible = false;
            eletroforese2.visible = false;
            eletroforese3.visible = false;
            eletroforese4.visible = false;
            eletroforese5.visible = false;
            gelSeparado.visible = false;
            gelFixo.visible = false;
            gotaGene.visible = false;

            if (contaTexto!=0) {
                vetorTexto12[contaTexto-1].visible = false;
            };

            passarFalaBt.visible = true;
            vetorTexto12[contaTexto].visible = true;

            passarFalaBt.removeAllEventListeners();
            passarFalaBt.addEventListener("click", avancaFala12);

            switch(contaTexto) {
                case 0:
                    caixaGaroto.visible = true;
                    caixaGarota.visible = false; 
                break;
                case 1:
                    caixaGaroto.visible = false;
                    caixaGarota.visible = true; 
                break;
            };
    }

    function avancaFala12() {
        if (contaTexto!=1) {
            contaTexto++;
            cena12();
        } else {
            texto68.visible = false;
            eletroforeseAberta1();
        }
    }

    function falaTermo2() {
        caixaGaroto.visible = true;
        caixaGarota.visible = false;
        passarFalaBt.visible = true;
        texto69.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto69.visible = false;
            voltarfase1();});
    }

    function falaEletro() {
        caixaGarota.visible = true;
        caixaGaroto.visible = false;
        passarFalaBt.visible = true;
        texto70.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto70.visible = false;
        caixaGarota.visible = false;
        passarFalaBt.visible = false;});
    }

    function falaEletro1() {
        caixaGaroto.visible = true;
        caixaGarota.visible = false;
        passarFalaBt.visible = true;
        texto71.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto71.visible = false;
        caixaGaroto.visible = false;
        passarFalaBt.visible = false;
        eletroZoomContainer.visible = false;
        falaEletro2();});
    }

    function falaEletro2() {
        caixaGarota.visible = true;
        caixaGaroto.visible = false;
        passarFalaBt.visible = true;
        texto72.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto72.visible = false;
        caixaGarota.visible = false;
        passarFalaBt.visible = false;
        eletroforese4.cursor = "pointer";
        eletroforese4.addEventListener("click", abreEletro);});
    }

    function falaEletro3() {
        caixaGarota.visible = true;
        caixaGaroto.visible = false;
        passarFalaBt.visible = true;
        texto73.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto73.visible = false;
        falaEletro4();});
    }

    function falaEletro4() {
        caixaGaroto.visible = true;
        caixaGarota.visible = false;
        passarFalaBt.visible = true;
        texto74.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto74.visible = false;
        eletroforeseAberta2.visible = false;
        raioX.visible = false;
        cena13();});
    }

    function cena13() {
        fase1Container.visible = true;
        

        if (contaTexto!=0) {
            vetorTexto13[contaTexto-1].visible = false;
        };

        passarFalaBt.visible = true;
        vetorTexto13[contaTexto].visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", avancaFala13);

        switch(contaTexto) {
            case 0:
                caixaGarota.visible = true;
                caixaGaroto.visible = false; 
            break;
            case 1:
                caixaGarota.visible = false;
                caixaGaroto.visible = true; 
            break;
            case 2:
                caixaGarota.visible = true;
                caixaGaroto.visible = false; 
            break;
        };
    }

    function avancaFala13() {
        if (contaTexto!=2) {
            contaTexto++;
            cena13();
        } else {
            texto77.visible = false;
            voltarfase1();
        }
    }

    function falaSementes() {
        caixaGaroto.visible = true;
        caixaGarota.visible = false;
        passarFalaBt.visible = true;
        texto78.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto78.visible = false;
        terminaFase1();});
    }

    function falaCenaLab() {
        caixaGarota.visible = true;
        caixaGaroto.visible = false;
        passarFalaBt.visible = true;
        texto79.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto79.visible = false;
        segundaBadge();});
    }

    function falaMapa2() {
        caixaGaroto.visible = true;
        passarFalaBt.visible = true;
        texto80.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto80.visible = false;
            caixaGaroto.visible = false;
        passarFalaBt.visible = false;});
    }

    function cena14() {
        fase1Container.visible = true;
        if (escolhaPersonagem == 2) {
            if (contaTexto!=0) {
                vetorTexto14[contaTexto-1].visible = false;
            };

            passarFalaBt.visible = true;
            vetorTexto14[contaTexto].visible = true;
        } else {
            if (contaTexto!=0) {
                vetorTexto14b[contaTexto-1].visible = false;
            };

            passarFalaBt.visible = true;
            vetorTexto14b[contaTexto].visible = true;
        }

        

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", avancaFala14);

        switch(contaTexto) {
            case 0:
                caixaGaroto.visible = true;
                caixaGarota.visible = false; 
            break;
            case 1:
                caixaGaroto.visible = false;
                caixaGarota.visible = true; 
            break;
            case 2:
                caixaGaroto.visible = true;
                caixaGarota.visible = false; 
            break;
            case 3:
                caixaGarota.visible = true;
                caixaGaroto.visible = false; 
            break;
        };
    }

    function avancaFala14() {
        if (contaTexto!=3) {
            contaTexto++;
            cena14();
        } else {
            texto84.visible = false;
            caixaGarota.visible = false;
            passarFalaBt.visible = false;
            cenaFazenda.cursor = "pointer";
            cenaFazenda.addEventListener("click", fase2);
        }
    }

    function falaPlantaBt() {
        caixaGaroto.visible = true;
        passarFalaBt.visible = true;
        texto85.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto85.visible = false;
        caixaGaroto.visible = false;
        passarFalaBt.visible = false;});
    }

    function falaPlantaCv() {
        caixaGaroto.visible = true;
        passarFalaBt.visible = true;
        texto86.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto86.visible = false;
        caixaGaroto.visible = false;
        passarFalaBt.visible = false;});
    }

    function falaNPlantaBt() {
        caixaGaroto.visible = true;
        passarFalaBt.visible = true;
        texto87.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto87.visible = false;
        caixaGaroto.visible = false;
        passarFalaBt.visible = false;});
    }

    function falaNPlantaCv() {
        caixaGaroto.visible = true;
        passarFalaBt.visible = true;
        texto88.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto88.visible = false;
        caixaGaroto.visible = false;
        passarFalaBt.visible = false;});
    }

    function falaPlantou() {
        texto85.visible = false;
        texto86.visible = false;
        texto87.visible = false;
        texto88.visible = false;

        caixaGaroto.visible = true;
        passarFalaBt.visible = true;
        texto89.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto89.visible = false;
        caixaGaroto.visible = false;
        passarFalaBt.visible = false;
        passaTempo(fase2Container);});
    }

    function cena15() {
        if (escolhaPersonagem == 2) {
             if (contaTexto!=0) {
                vetorTexto15[contaTexto-1].visible = false;
            };

            passarFalaBt.visible = true;
            vetorTexto15[contaTexto].visible = true;
        } else {
             if (contaTexto!=0) {
                vetorTexto15b[contaTexto-1].visible = false;
            };

            passarFalaBt.visible = true;
            vetorTexto15b[contaTexto].visible = true;
        }
       

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", avancaFala15);

        switch(contaTexto) {
            case 0:
                caixaGarota.visible = true;
                caixaGaroto.visible = false; 
            break;
            case 1:
                caixaGarota.visible = false;
                caixaGaroto.visible = true; 
            break;
            case 2:
                caixaGarota.visible = true;
                caixaGaroto.visible = false; 
            break;
            case 3:
                caixaGaroto.visible = true;
                caixaGarota.visible = false; 
            break;
            case 4:
                caixaGarota.visible = true;
                caixaGaroto.visible = false; 
            break;
            case 5:
                caixaGaroto.visible = true;
                caixaGarota.visible = false; 
            break;
            case 6:
                caixaGarota.visible = true;
                caixaGaroto.visible = false; 
            break;
        };
    }

    function avancaFala15() {
        if (contaTexto!=6) {
            contaTexto++;
            cena15();
        } else {
            texto96.visible = false;
            caixaGarota.visible = false;
            passarFalaBt.visible = false;
            fimFase2();
        }
    }

    function cena16() {
        if (contaTexto!=0) {
            vetorTexto16[contaTexto-1].visible = false;
        };

        passarFalaBt.visible = true;
        vetorTexto16[contaTexto].visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", avancaFala16);

        switch(contaTexto) {
            case 0:
                caixaGaroto.visible = true;
                caixaGarota.visible = false; 
            break;
            case 1:
                caixaGaroto.visible = false;
                caixaGarota.visible = true; 
            break;
            case 2:
                caixaGaroto.visible = true;
                caixaGarota.visible = false; 
            break;
            case 3:
                caixaGarota.visible = true;
                caixaGaroto.visible = false; 
            break;
            case 4:
                caixaGaroto.visible = true;
                caixaGarota.visible = false; 
            break;
        };
    }

    function avancaFala16() {
        if (contaTexto!=4) {
            contaTexto++;
            cena16();
        } else {
            texto101.visible = false;
            caixaGaroto.visible = false;
            passarFalaBt.visible = false;
            terceiraBadge();
        }
    }

    function falaMapa3() {
        caixaGaroto.visible = true;
        passarFalaBt.visible = true;
        texto114.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto114.visible = false;
            caixaGaroto.visible = false;
            passarFalaBt.visible = false;});
    }

    function cena17() {
        phaseoutin(mapaContainer, fase3Container);

        fase3Container.visible = true;
        anima1.alpha = 0;
        anima2.alpha = 0;
        anima3.alpha = 0;
        anima4.alpha = 0;
        maq1.visible = false;

        if (contaTexto!=0) {
            vetorTexto17[contaTexto-1].visible = false;
        };

        passarFalaBt.visible = true;
        vetorTexto17[contaTexto].visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", avancaFala17);

        switch(contaTexto) {
            case 0:
                caixaGarota.visible = true;
                caixaGaroto.visible = false; 
            break;
            case 1:
                caixaGarota.visible = false;
                caixaGaroto.visible = true; 
            break;
            case 2:
                caixaGarota.visible = true;
                caixaGaroto.visible = false; 
            break;
            case 3:
                caixaGaroto.visible = true;
                caixaGarota.visible = false; 
            break;
            case 4:
                caixaGarota.visible = true;
                caixaGaroto.visible = false; 
            break;
            case 5:
                caixaGaroto.visible = true;
                caixaGarota.visible = false; 
            break;
            case 6:
                caixaGarota.visible = true;
                caixaGaroto.visible = false; 
            break;
            case 7:
                caixaGarota.visible = false;
                caixaGaroto.visible = true; 
            break;
            case 8:
                caixaGarota.visible = true;
                caixaGaroto.visible = false; 
            break;
        };
    }

    function avancaFala17() {
        if (contaTexto!=8) {
            contaTexto++;
            cena17();
        } else {
            texto123.visible = false;
            caixaGarota.visible = false;
            passarFalaBt.visible = false;
            fase3();
        }
    }

    function cena18() {
        phaseoutin(mapaContainer, fundoFase3);

        fase3Container.visible = true;
        anima1.alpha = 0;
        anima2.alpha = 0;
        anima3.alpha = 0;
        anima4.alpha = 0;
        maq1.visible = false;

        if (contaTexto!=0) {
            vetorTexto18[contaTexto-1].visible = false;
        };

        passarFalaBt.visible = true;
        vetorTexto18[contaTexto].visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", avancaFala18);

        switch(contaTexto) {
            case 0:
                caixaGaroto.visible = true;
                caixaGarota.visible = false; 
            break;
            case 1:
                caixaGaroto.visible = false;
                caixaGarota.visible = true; 
            break;
            case 2:
                caixaGaroto.visible = true;
                caixaGarota.visible = false; 
            break;
            case 3:
                caixaGarota.visible = true;
                caixaGaroto.visible = false; 
        };
    }

    function avancaFala18() {
        if (contaTexto!=3) {
            contaTexto++;
            cena18();
        } else {
            texto127.visible = false;
            caixaGarota.visible = false;
            passarFalaBt.visible = false;
            quartaBadge();
        }
    }

    function falaMapa4() {

        if (escolhaPersonagem == 2) {
            caixaGaroto.visible = true;
            passarFalaBt.visible = true;
            texto127.visible = true;
        } else {
            caixaGaroto.visible = true;
            passarFalaBt.visible = true;
            texto128.visible = true;
        }

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto127.visible = false;
            texto128.visible = false;
            caixaGaroto.visible = false;
            passarFalaBt.visible = false;});
    }

    function falaFase4() {
        caixaGarota.visible = true;
        passarFalaBt.visible = true;
        texto130.visible = true;

        passarFalaBt.removeAllEventListeners();
        passarFalaBt.addEventListener("click", function() {texto130.visible = false;
            caixaGarota.visible = false;
            passarFalaBt.visible = false;
            quintaBadge()});
    }