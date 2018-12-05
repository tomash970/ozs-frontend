import { WorkPlaceModel } from './work-place.model';
import { BusinessUnitModel } from './business-unit.model';
import { ExtraordinarilyModel } from './extraordinarily.model';
import { ExceptionallyModel } from './exceptionally.model';

import { WorkerModel } from './worker.model';
import { Subject } from 'rxjs/Subject';

export class DataService {
    workerAsigned = new Subject<number>();

    submitionForm = new Subject();

    ozsIznimnoChanged    = new Subject();
    ozsIzvanrednoChanged = new Subject();

    editingIznimno    = new Subject<number>();
    editingIzvanredno = new Subject<number>();

    ////// BUSSINES UNIT ARRAY \\\\\\
    // bu_name: string,
    // bu_city: string,
    // bu_street: string,
    // bu_str_num: number,
    // bu_boss_frist_name: string,
    // bu_boss_last_name: string
    businessUnitArray: BusinessUnitModel[] = [
        { id: 0, bu_name: 'Podružnica Rijeka', bu_city: 'Rijeka', bu_street: 'Kolodvorska',
        bu_str_num: 21, bu_boss_frist_name: 'Pero', bu_boss_last_name: 'Perić' },
        { id: 1, bu_name: 'Podružnica Split', bu_city: 'Split', bu_street: 'Kolodvorska',
        bu_str_num: 122, bu_boss_frist_name: 'Hrvoje', bu_boss_last_name: 'Horvat' },
        { id: 2, bu_name: 'Podružnica Vinkovci', bu_city: 'Vinkovci', bu_street: 'Kolodvorska',
        bu_str_num: 13, bu_boss_frist_name: 'Stjepan', bu_boss_last_name: 'Stipić' },
        { id: 3, bu_name: 'Podružnica Varaždin', bu_city: 'Varaždin', bu_street: 'Kolodvorska',
        bu_str_num: 71, bu_boss_frist_name: 'Božidar', bu_boss_last_name: 'Božić' },
        { id: 4, bu_name: 'Podružnica Osijek', bu_city: 'Osijek', bu_street: 'Kolodvorska',
        bu_str_num: 81, bu_boss_frist_name: 'Đuro', bu_boss_last_name: 'Đurić' },
        { id: 5, bu_name: 'Podružnica Sveti Kiž Začretje', bu_city: 'Sveti Križ Začretje', bu_street: 'Kolodvorska',
        bu_str_num: 221, bu_boss_frist_name: 'Mika', bu_boss_last_name: 'Mikšić' }
    ];

    // work place array MODEL MUST BE CHANGE
    // workPlaceArray: WorkPlaceModel[]   =  [
    //     {id: 0, wp_name: 'Zidar',            wp_code: 51},
    //     {id: 1, wp_name: 'Tesar',            wp_code: 11},
    //     {id: 2, wp_name: 'Armirač',          wp_code: 80},
    //     {id: 3, wp_name: 'Pomoćni radnik',   wp_code: 50},
    //     {id: 4, wp_name: 'Rukovatelj ',      wp_code: 43},
    //     {id: 5, wp_name: 'Kuhar',            wp_code: 28},
    //     {id: 6, wp_name: 'Radnik u kuhinji', wp_code: 66},
    //     {id: 7, wp_name: 'Pekar',            wp_code: 69},
    //     {id: 8, wp_name: 'Stolar',           wp_code: 27},
    //     {id: 9, wp_name: 'Tokar',            wp_code: 13},
    //     {id: 10, wp_name: 'Varioc',           wp_code: 26},
    //     {id: 11, wp_name: 'Limar',            wp_code: 71}
    // ];

    // eksperimental workplace array with suit array inside MODEL MUST BE CHANGE

    workPlaceArray: WorkPlaceModel[]   =  [
        {id: 0, wp_name: 'Zidar', wp_code: 51, wp_means: [  {id: 20, so: 'Kaput s jednorednim kopčanjem (M)'},
                                                            {id: 52, so: 'Kaput s jednorednim kopčanjem (Ž)'},
                                                            {id: 26, so: 'Hlače (M)'},
                                                            {id: 29, so: 'Suknja'},
                                                            {id: 28, so: 'Hlače (Ž)'},
                                                            {id: 71, so: 'Pulover bez rukava (M)'},
                                                            {id: 73, so: 'Pulover bez rukava (Ž)'},
                                                            {id: 16, so: 'Kožne rukavice crne boje (M)'},
                                                            {id: 17, so: 'Kožne rukavice crne boje (Ž)'},
                                                            {id: 21, so: 'Kaput s jednorednim kopčanjem (M)'},
                                                            {id: 56, so: 'Kaput dugi rukav (Ž)'},
                                                            {id: 27, so: 'Hlače (M)'},
                                                        ]
        },
        {id: 1, wp_name: 'Tesar', wp_code: 11, wp_means: [  {id: 20, so: 'Kaput s jednorednim kopčanjem (M)'},
                                                            {id: 52, so: 'Kaput s jednorednim kopčanjem (Ž)'},
                                                            {id: 71, so: 'Pulover bez rukava (M)'},
                                                            {id: 73, so: 'Pulover bez rukava (Ž)'},
                                                            {id: 16, so: 'Kožne rukavice crne boje (M)'},
                                                            {id: 17, so: 'Kožne rukavice crne boje (Ž)'},
                                                            {id: 21, so: 'Kaput s jednorednim kopčanjem (M)'},
                                                            {id: 56, so: 'Kaput dugi rukav (Ž)'},
                                                            {id: 27, so: 'Hlače (M)'},
                                                        ]
        },
        {id: 2, wp_name: 'Armirač', wp_code: 80, wp_means: [{id: 20, so: 'Kaput s jednorednim kopčanjem (M)'},
                                                            {id: 52, so: 'Kaput s jednorednim kopčanjem (Ž)'},
                                                            {id: 26, so: 'Hlače (M)'},
                                                            {id: 71, so: 'Pulover bez rukava (M)'},
                                                            {id: 73, so: 'Pulover bez rukava (Ž)'},
                                                            {id: 16, so: 'Kožne rukavice crne boje (M)'},
                                                            {id: 17, so: 'Kožne rukavice crne boje (Ž)'},
                                                            {id: 21, so: 'Kaput s jednorednim kopčanjem (M)'},
                                                            {id: 56, so: 'Kaput dugi rukav (Ž)'},
                                                            {id: 27, so: 'Hlače (M)'},
                                                            {id: 29, so: 'Suknja'},
                                                            {id: 28, so: 'Hlače (Ž)'},
                                                            ]
        },
        {id: 3, wp_name: 'Pomoćni radnik', wp_code: 50, wp_means: [    
                                                            {id: 71, so: 'Pulover bez rukava (M)'},
                                                            {id: 73, so: 'Pulover bez rukava (Ž)'},
                                                            {id: 16, so: 'Kožne rukavice crne boje (M)'},
                                                            {id: 17, so: 'Kožne rukavice crne boje (Ž)'},
                                                            {id: 21, so: 'Kaput s jednorednim kopčanjem (M)'},
                                                            {id: 56, so: 'Kaput dugi rukav (Ž)'},
                                                            {id: 27, so: 'Hlače (M)'},
                                                                    ]
        },
        {id: 4, wp_name: 'Rukovatelj ', wp_code: 43, wp_means: [  
                                                            {id: 20, so: 'Kaput s jednorednim kopčanjem (M)'},
                                                            {id: 52, so: 'Kaput s jednorednim kopčanjem (Ž)'},
                                                            {id: 26, so: 'Hlače (M)'},
                                                            {id: 29, so: 'Suknja'},
                                                            {id: 28, so: 'Hlače (Ž)'},
                                                                ]
        },
        {id: 5, wp_name: 'Kuhar', wp_code: 28, wp_means: [  {id: 56, so: 'Kaput dugi rukav (Ž)'},
                                                            {id: 27, so: 'Hlače (M)'},
                                                            {id: 31, so: 'Košulja kratkih rukava boje leda (M)'},
                                                            {id: 35, so: 'Košulja kratkih rukava boje leda (Ž)'},
                                                            {id: 69, so: 'Kravata (M )'},
                                                            {id: 70, so: 'Kravata (Ž)'},
                                                            {id: 30, so: 'Suknja'},
                                                            {id: 54, so: 'Hlače (Ž)'},
                                                            {id: 90, so: 'Marama'},
                                                            {id: 63, so: 'Cipele crne boje (M)'},
                                                            {id: 65, so: 'Cipele crne boje (Ž)'},
                                                            {id: 29, so: 'Suknja'},
                                                            {id: 28, so: 'Hlače (Ž)'},
                                                        ]
        },
        {id: 6, wp_name: 'Radnik u kuhinji', wp_code: 66, wp_means: [ 
                                                            {id: 20, so: 'Kaput s jednorednim kopčanjem (M)'},
                                                            {id: 52, so: 'Kaput s jednorednim kopčanjem (Ž)'},
                                                            {id: 26, so: 'Hlače (M)'},
                                                            {id: 29, so: 'Suknja'},
                                                            {id: 28, so: 'Hlače (Ž)'},
                                                                    ]
        },
        {id: 7, wp_name: 'Pekar', wp_code: 69, wp_means: [  {id: 56, so: 'Kaput dugi rukav (Ž)'},
                                                            {id: 27, so: 'Hlače (M)'},
                                                            {id: 31, so: 'Košulja kratkih rukava boje leda (M)'},
                                                            {id: 35, so: 'Košulja kratkih rukava boje leda (Ž)'},
                                                            {id: 69, so: 'Kravata (M )'},
                                                            {id: 70, so: 'Kravata (Ž)'},
                                                            {id: 30, so: 'Suknja'},
                                                            {id: 54, so: 'Hlače (Ž)'},
                                                            {id: 90, so: 'Marama'},
                                                            {id: 63, so: 'Cipele crne boje (M)'},
                                                            {id: 65, so: 'Cipele crne boje (Ž)'}
                                                        ]
        },
        {id: 8, wp_name: 'Stolar', wp_code: 27, wp_means: [ {id: 20, so: 'Kaput s jednorednim kopčanjem (M)'},
                                                            {id: 52, so: 'Kaput s jednorednim kopčanjem (Ž)'},
                                                            {id: 26, so: 'Hlače (M)'},
                                                            {id: 29, so: 'Suknja'},
                                                            {id: 28, so: 'Hlače (Ž)'},
                                                            {id: 56, so: 'Kaput dugi rukav (Ž)'},
                                                            {id: 27, so: 'Hlače (M)'},
                                                            {id: 31, so: 'Košulja kratkih rukava boje leda (M)'},
                                                            {id: 35, so: 'Košulja kratkih rukava boje leda (Ž)'},
                                                            {id: 69, so: 'Kravata (M )'},
                                                            {id: 70, so: 'Kravata (Ž)'},
                                                            {id: 30, so: 'Suknja'},
                                                            {id: 54, so: 'Hlače (Ž)'},
                                                            {id: 90, so: 'Marama'},
                                                            {id: 63, so: 'Cipele crne boje (M)'},
                                                            {id: 65, so: 'Cipele crne boje (Ž)'}
                                                        ]
        },
        {id: 9, wp_name: 'Tokar', wp_code: 13, wp_means: [  {id: 20, so: 'Kaput s jednorednim kopčanjem (M)'},
                                                            {id: 52, so: 'Kaput s jednorednim kopčanjem (Ž)'},
                                                            {id: 26, so: 'Hlače (M)'},
                                                            {id: 56, so: 'Kaput dugi rukav (Ž)'},
                                                            {id: 27, so: 'Hlače (M)'},
                                                            {id: 31, so: 'Košulja kratkih rukava boje leda (M)'},
                                                            {id: 35, so: 'Košulja kratkih rukava boje leda (Ž)'},
                                                            {id: 69, so: 'Kravata (M )'},
                                                            {id: 70, so: 'Kravata (Ž)'},
                                                            {id: 30, so: 'Suknja'},
                                                            {id: 54, so: 'Hlače (Ž)'},
                                                            {id: 90, so: 'Marama'},
                                                            {id: 63, so: 'Cipele crne boje (M)'},
                                                            {id: 65, so: 'Cipele crne boje (Ž)'}
                                                        ]
        },
        {id: 10, wp_name: 'Varioc', wp_code: 26, wp_means: [{id: 20, so: 'Kaput s jednorednim kopčanjem (M)'},
                                                            {id: 52, so: 'Kaput s jednorednim kopčanjem (Ž)'},
                                                            {id: 26, so: 'Hlače (M)'},
                                                            {id: 29, so: 'Suknja'},
                                                            {id: 28, so: 'Hlače (Ž)'},
                                                            {id: 28, so: 'Hlače (Ž)'},
                                                            {id: 32, so: 'Košulja dugih rukava boje leda (M)'},
                                                            {id: 36, so: 'Košulja dugih rukava boje leda (Ž)'},
                                                            {id: 47, so: 'Vjetrovka s uloškom (M)'},
                                                            {id: 48, so: 'Vjetrovka s uloškom (Ž)'},
                                                            {id: 11, so: 'Kapa muška'},
                                                            {id: 13, so: 'Šeširić ženski'},
                                                            {id: 71, so: 'Pulover bez rukava (M)'},
                                                            {id: 73, so: 'Pulover bez rukava (Ž)'},
                                                            ]
        },
        {id: 11, wp_name: 'Limar', wp_code: 71, wp_means: [ {id: 20, so: 'Kaput s jednorednim kopčanjem (M)'},
                                                            {id: 28, so: 'Hlače (Ž)'},
                                                            {id: 32, so: 'Košulja dugih rukava boje leda (M)'},
                                                            {id: 36, so: 'Košulja dugih rukava boje leda (Ž)'},
                                                            {id: 47, so: 'Vjetrovka s uloškom (M)'},
                                                            {id: 48, so: 'Vjetrovka s uloškom (Ž)'},
                                                            {id: 11, so: 'Kapa muška'},
                                                            {id: 13, so: 'Šeširić ženski'},
                                                            {id: 71, so: 'Pulover bez rukava (M)'},
                                                            {id: 73, so: 'Pulover bez rukava (Ž)'}
                                            ]}
    ];

    suitArray1 = [
        {id: 20, so: 'Kaput s jednorednim kopčanjem (M)'},
        {id: 52, so: 'Kaput s jednorednim kopčanjem (Ž)'},
        {id: 26, so: 'Hlače (M)'},
        {id: 29, so: 'Suknja'},
        {id: 28, so: 'Hlače (Ž)'},
        {id: 32, so: 'Košulja dugih rukava boje leda (M)'},
        {id: 36, so: 'Košulja dugih rukava boje leda (Ž)'},
        {id: 47, so: 'Vjetrovka s uloškom (M)'},
        {id: 48, so: 'Vjetrovka s uloškom (Ž)'},
        {id: 11, so: 'Kapa muška'},
        {id: 13, so: 'Šeširić ženski'},
        {id: 71, so: 'Pulover bez rukava (M)'},
        {id: 73, so: 'Pulover bez rukava (Ž)'},
        {id: 16, so: 'Kožne rukavice crne boje (M)'},
        {id: 17, so: 'Kožne rukavice crne boje (Ž)'},
        {id: 21, so: 'Kaput s jednorednim kopčanjem (M)'},
        {id: 56, so: 'Kaput dugi rukav (Ž)'},
        {id: 27, so: 'Hlače (M)'},
        {id: 31, so: 'Košulja kratkih rukava boje leda (M)'},
        {id: 35, so: 'Košulja kratkih rukava boje leda (Ž)'},
        {id: 69, so: 'Kravata (M )'},
        {id: 70, so: 'Kravata (Ž)'},
        {id: 30, so: 'Suknja'},
        {id: 54, so: 'Hlače (Ž)'},
        {id: 90, so: 'Marama'},
        {id: 63, so: 'Cipele crne boje (M)'},
        {id: 65, so: 'Cipele crne boje (Ž)'}
    ];

    suitArray2 = [
         {id: 152, so: 'Kožna jakna (M)'},
         {id: 162, so: 'Cipele crne boje (M) zimske'},
         {id: 163, so: 'Cipele crne boje (M) ljetne'},
         {id: 112, so: 'Jakna s kapuljačom i rukavima na skidanje ljetna'},
         {id: 116, so: ' Kožne rukavice crne boje (M) zimske'}
    ];

}
