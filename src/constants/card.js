import React from "react";

/**
 * Тип продаваемой недвижимости (поле type)
 */
export const TYPES = {
  flat: 'квартира',
  house: 'дом',
  landPlot: 'зем. участок'
}

/**
 * Единицы измерения в корректном формате (поле unit)
 */
export const UNITS = {
  ['квм']: <span>м<sup>2</sup></span>,
}

/**
 * Тип автора объявления (поле relationships.type )
 */
export const RELATIONSHIPS = {
  agent: 'Агент',
  owner: 'Собственник'
}