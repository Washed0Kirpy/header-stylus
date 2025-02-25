"use strict";

var hamburger = document.querySelector(".wrapper-hamburger"); //Zde si nastavuji proměnou hamburger, odkazuji se na html pro třídu, s kterou budu chtít pracovat v js

var nav = document.querySelector("nav"); //Mohu volat stejně i jen samotný element (pokud je jen jeden použitý v html, v opačném případě bych vybrat takhle všechny s tímto elementem)

var state = false; //Pro kontrolu zda jsem už kliknul na hamburger
//Arrow funkce - je typn anonymní funkce, který se volá jen v případě, pokud je splněná nějaká událost (event)
//volám událost, pro který element se to týká, volám proměnou hamburger, který je deklarovaná na řádku 1
//addEventListener - přidává naslouchání události, čeká, zda se nějaká událost stane
//"click" - je typ událostí, na kterou čeká
// () => - je zápis pro anonymní funkci, tohle je ta arrow funkce
// v {} - je tělo funkce, to co se bude dít, když událost zaznamená událost klik

hamburger.addEventListener("click", function () {
  //Kontrolujeme, zda uživatel už jednou kliknul na hamburger, pokud ne, přeskočí se tato podmínka, protože defaultně je nastavený boolean hodnota na false
  if (state == true) {
    hamburger.classList.remove("is-active"); //Zde naopak třídu is-active odstraňujeme z elementu, tím docílíme animovní pro zpětnou pozici v defaultní hodnotě (pojede menu zpět nahoru)

    nav.classList.remove("is-open"); //To samé jako v horním řádku, ale pro nav

    state = false; //Nastavujeme zpět na false, aby se nestalo, že proběhné příkaz dvakrát po sobě. Díky tomu funguje tato podmínka. Pozor, musíte pokažde kliknout na hamburger, aby to fungovalo
  } //Pokud state je false, splní se tato podmínka
  else {
      hamburger.classList.add("is-active"); //Volám proměnou hamburger, která odkazuje na html. Používám classlist.add - přidávám do elementu další classu, kterou jsem si pojmenoval "is-active". Tuto třídu my upravíme a podle toho se projeví animace

      nav.classList.add("is-open"); //Tady děláme to samé, jako v horním řádku, ale přidáváme jí pro element nav, aby se animace projevila pro nav společně, například naprogramuje ve stylusu to, aby nav popojelo dolů

      state = true; //Zde měním state na true, aby po druhý proběhl opačný proces, tím se nám navigace bude posouvat nahoru a dolů a hamburer rozevírat a zavírat
    }
}); //Díky tomuto může fungovat animace, když se přidává nebo odebírá přidaná třída do elementu.