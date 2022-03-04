/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import { CardInput } from '.';
import { Context } from '../Provider';

export default function Form() {
  const { hasTrunfo, disableSaveBtn, saveCard } = useContext(Context);

  const renderTrunfoCheck = () => ((!hasTrunfo) ? (
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
      <CardInput
        name="description"
        testid="description-input"
        labelName="Descrição"
        type="textarea"
      />
      <CardInput name="attr1" testid="attr1-input" labelName="Atributo 1" type="number" />
      <CardInput name="attr2" testid="attr2-input" labelName="Atributo 2" type="number" />
      <CardInput name="attr3" testid="attr3-input" labelName="Atributo 3" type="number" />
      <CardInput name="image" testid="image-input" labelName="Imagem" />
      <CardInput
        name="rarity"
        testid="rare-input"
        labelName="Selecione a raridade"
        type="select"
      />
      {renderTrunfoCheck()}
      <button
        data-testid="save-button"
        className="button blue-button"
        type="button"
        disabled={ disableSaveBtn }
        onClick={ saveCard }
      >
        Salvar
      </button>
    </form>
  );
}
