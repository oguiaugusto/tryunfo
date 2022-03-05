/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-cycle */
import React from 'react';
import { FilterInput } from '.';

export default function CardsFilter() {
  return (
    <div>
      <FilterInput name="name" placeholder="Nome da carta" testid="name-filter" />
      <FilterInput name="rarity" testid="rare-filter" type="select" />
      <label htmlFor="filter-trunfo">
        Super trunfo?
        <FilterInput name="trunfo" testid="trunfo-filter" type="checkbox" />
      </label>
    </div>
  );
}
