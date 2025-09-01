import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const ExpertApp = () => {

  const [categories, setCategories] = useState(['marvel']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <header className="app-header">
        <h1>Lab 4</h1>
        <p className="subtitle">Alejandro Ramos Chávez</p>
      </header>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {
        categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))
      }
    </>
  )
}