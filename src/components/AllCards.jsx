/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import { CardsFilter, Card } from '.';
import { Context } from '../Provider';

export default function AllCards() {
  const { savedCards, filters } = useContext(Context);
  const filteredCards = filters.trunfo ? (
    savedCards.filter((c) => c.trunfo)
  ) : (
    savedCards
      .filter((c) => c.name.toLowerCase().includes(filters.name.toLowerCase()))
      .filter((c) => {
        const rarity = filters.rarity === 'raridade' ? '' : filters.rarity;
        return rarity === '' ? true : c.rarity === rarity;
      })
  );

  return (
    <>
      <p className="p-title" id="all-cards-title">Todas as cartas</p>
      <section className="all-cards-container">
        <div className="filter-cards">
          <p>Filtro de busca</p>
          <CardsFilter />
        </div>
        <div className="saved-cards">
          {
            filteredCards.map((card, i) => (
              <Card key={ `card-${i}` } card={ card } />
            ))
          }
        </div>
      </section>
    </>
  );
}
