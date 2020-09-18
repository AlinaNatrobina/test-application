import { TYPES } from "constants/card";

/**
 * Получить расшифровку с параметрами квартиры
 * @param {object} attributes
 */
export const getSecondTitle = (attributes = {}, type) => {
  const { rooms, area, unit } = attributes;
  return `${rooms}-комн. ${TYPES[type]}, ${area} ${unit}`;
};

/**
 * Получить полное наименование адреса
 * @param {object} address
 */
export const getAddressName = (address = {}) => {
  const { city, street, house, room } = address;
  return `${city}, ${street}, д.${house}, кв.${room}`;
};

/**
 * Получить имя в формате Фамилия И.О.
 * @param {object} relationships
 */
export const getPersonName = (relationships = {}) => {
  const { first_name, last_name, middle_name } = relationships;
  return `${last_name} ${first_name.substring(0, 1)}.${middle_name.substring(0, 1)}.`;
};
