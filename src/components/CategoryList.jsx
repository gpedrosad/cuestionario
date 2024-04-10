import React from "react";
import { Link } from "react-router-dom";
import { imgs, categories } from "../data";
import { CategoryCard } from "./CategoryCard";
const [ 
    imgCiencia,
    imgDeportes,
    imgFilosofia,
    imgGeografia,
    imgHistoria,
    imgLiteratura,
    imgTecnologia,
] = imgs;

export const CategoryList = () =>{
    return (


        <div className="flex flex-row flex-wrap justify-center gap-4 mt-10">
           

            <CategoryCard 
            category={categories.ciencia} 
            src={imgCiencia} 
            alt={`Categoria ${categories.ciencia}`}
            gradientColor="from-purple-500 to pink-500"/>

            <CategoryCard 
            category={categories.deportes} 
            src={imgDeportes} 
            alt={`Categoria ${categories.deportes}`}
            gradientColor="from-lime-400 to teal-500"/>

            <CategoryCard 
            category={categories.filosofia} 
            src={imgFilosofia} 
            alt={`Categoria ${categories.filosofia}`}
            gradientColor="from-red-400 to zinc-500"/>

            <CategoryCard 
            category={categories.geografia} 
            src={imgGeografia} 
            alt={`Categoria ${categories.geografia}`}
            gradientColor="from-cyan-100 to lime-500"/>
          
            <CategoryCard 
            category={categories.historia} 
            src={imgHistoria} 
            alt={`Categoria ${categories.historia}`}
            gradientColor="from-sky-100 to pink-500"/>

         

            <CategoryCard 
            category={categories.literatura} 
            src={imgLiteratura} 
            alt={`Categoria ${categories.literatura}`}
            gradientColor="from-amber-100 to zinc-500"/>

            <CategoryCard 
            category={categories.tecnologia} 
            src={imgTecnologia} 
            alt={`Categoria ${categories.tecnologia}`}
            gradientColor="from-violet-100 to pink-500"/>

   



        </div>
    );
};