import {makeAutoObservable} from 'mobx';

export default class PlantStore {
  constructor() {
    this._plants = [];
    this._category = null;
    this._sort = '';
    makeAutoObservable(this);
  }

  setPlants(plants) {
    this._plants = plants;
  }

  setCategory(category) {
    this._category = category;
  }

  setCategory(sort) {
    this._sort = sort;
  }
}
