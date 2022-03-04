import React, { useContext } from 'react';
import { CardInput } from '.';
import { Context } from '../Provider';

export default function Form() {
  const { card } = useContext(Context);
  const rarityOptions = ['Normal', 'Raro', 'Muito Raro'];

  const renderTrunfoCheck = () => ((!card.trunfo) ? (
    <CardInput
      name="trunfo"
      testid="trunfo-input"
      labelName="Carta Super Trunfo?"
      type="checkbox"
    />
  ) : (
    <p className="trunfo-validated">Você já tem um Super Trunfo em seu baralho</p>
  ));

  return (
    <form>
      <h2>Adicionar nova carta</h2>
      <CardInput name="name" testid="name-input" labelName="Nome" />
      <CardInput name="description" testid="description-input" labelName="Descrição" />
      <CardInput name="attr1" testid="attr1-input" labelName="Atributo 1" type="number" />
      <CardInput name="attr2" testid="attr2-input" labelName="Atributo 2" type="number" />
      <CardInput name="attr3" testid="attr3-input" labelName="Atributo 3" type="number" />
      <CardInput name="image" testid="image-input" labelName="Imagem" />
      <CardInput
        name="rarity"
        testid="rare-input"
        labelName="Selecione a raridade"
        type="select"
        options={ rarityOptions }
      />
      {renderTrunfoCheck()}
      <button
        data-testid="save-button"
        className="button blue-button"
        type="button"
        disabled={ false }
        onClick={ () => {} }
      >
        Salvar
      </button>
    </form>
  );
}
