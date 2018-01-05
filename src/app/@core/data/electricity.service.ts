import { Injectable } from '@angular/core';

@Injectable()
export class ElectricityService {

  private data = [
    {
      title: '2015',
      months: [
        { month: 'Janeiro', delta: '0.97', down: true, kWatts: '816', cost: '97' },
        { month: 'Fevereiro', delta: '1.83', down: true, kWatts: '806', cost: '95' },
        { month: 'Março', delta: '0.64', down: true, kWatts: '803', cost: '94' },
        { month: 'Abril', delta: '2.17', down: false, kWatts: '818', cost: '98' },
        { month: 'Maio', delta: '1.32', down: true, kWatts: '809', cost: '96' },
        { month: 'Junho', delta: '0.05', down: true, kWatts: '808', cost: '96' },
        { month: 'Julho', delta: '1.39', down: false, kWatts: '815', cost: '97' },
        { month: 'Agosto', delta: '0.73', down: true, kWatts: '807', cost: '95' },
        { month: 'Setembro', delta: '2.61', down: true, kWatts: '792', cost: '92' },
        { month: 'Outubro', delta: '0.16', down: true, kWatts: '791', cost: '92' },
        { month: 'Novembro', delta: '1.71', down: true, kWatts: '786', cost: '89' },
        { month: 'Dezembro', delta: '0.37', down: false, kWatts: '789', cost: '91' },
      ],
    },
    {
      title: '2016',
      active: true,
      months: [
        { month: 'Janeiro', delta: '1.56', down: true, kWatts: '789', cost: '91' },
        { month: 'Fevereiro', delta: '0.33', down: false, kWatts: '791', cost: '92' },
        { month: 'Março', delta: '0.62', down: true, kWatts: '790', cost: '92' },
        { month: 'Abril', delta: '1.93', down: true, kWatts: '783', cost: '87' },
        { month: 'Maio', delta: '2.52', down: true, kWatts: '771', cost: '83' },
        { month: 'Junho', delta: '0.39', down: false, kWatts: '774', cost: '85' },
        { month: 'Julho', delta: '1.61', down: true, kWatts: '767', cost: '81' },
        { month: 'Agosto', delta: '1.41', down: true, kWatts: '759', cost: '76' },
        { month: 'Setembro', delta: '1.03', down: true, kWatts: '752', cost: '74' },
        { month: 'Outubro', delta: '2.94', down: false, kWatts: '769', cost: '82' },
        { month: 'Novembro', delta: '0.26', down: true, kWatts: '767', cost: '81' },
        { month: 'Dezembro', delta: '1.62', down: true, kWatts: '760', cost: '76' },
      ],
    },
    {
      title: '2017',
      months: [
        { month: 'Janeiro', delta: '1.34', down: false, kWatts: '789', cost: '91' },
        { month: 'Fevereiro', delta: '0.95', down: false, kWatts: '793', cost: '93' },
        { month: 'Março', delta: '0.25', down: true, kWatts: '791', cost: '92' },
        { month: 'Abril', delta: '1.72', down: false, kWatts: '797', cost: '95' },
        { month: 'Maio', delta: '2.62', down: true, kWatts: '786', cost: '90' },
        { month: 'Junho', delta: '0.72', down: false, kWatts: '789', cost: '91' },
        { month: 'Julho', delta: '0.78', down: true, kWatts: '784', cost: '89' },
        { month: 'Agosto', delta: '0.36', down: true, kWatts: '782', cost: '88' },
        { month: 'Setembro', delta: '0.55', down: false, kWatts: '787', cost: '90' },
        { month: 'Outubro', delta: '1.81', down: true, kWatts: '779', cost: '86' },
        { month: 'Novembro', delta: '1.12', down: true, kWatts: '774', cost: '84' },
        { month: 'Dezembro', delta: '0.52', down: false, kWatts: '776', cost: '95' },
      ],
    },
  ];

  constructor() {
  }

  // TODO: observables
  getData() {
    return this.data;
  }
}
