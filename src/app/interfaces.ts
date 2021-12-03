export interface IPlayerScoreBox{
    firstShot?: number;
    secondShot?: number;
    thirdShot?: number;
    score?: number;
    isFinished: boolean;
    isSpare: boolean;
    isStrike: boolean;
    index: number;
}

export enum BonusType{
    STRIKE,
    SPARE,
    REGULAR
}