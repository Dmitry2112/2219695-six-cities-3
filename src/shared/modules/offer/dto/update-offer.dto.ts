import {Good, City, OfferType, Location} from '../../../types/index.js';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNumber, IsObject,
  IsOptional,
  Max,
  MaxLength,
  Min,
  MinLength
} from 'class-validator';
import {UpdateOfferValidationMessage} from './update-offer.message.js';

export class UpdateOfferDto {
  @IsOptional()
  @MinLength(10, {message: UpdateOfferValidationMessage.title.minLength})
  @MaxLength(100, {message: UpdateOfferValidationMessage.title.maxLength})
  public title?: string;

  @IsOptional()
  @MinLength(20, {message: UpdateOfferValidationMessage.description.minLength})
  @MaxLength(1024, {message: UpdateOfferValidationMessage.description.maxLength})
  public description?: string;

  @IsOptional()
  @IsDateString({}, {message: UpdateOfferValidationMessage.postDate.invalidFormat})
  public postDate?: Date;

  @IsOptional()
  @IsObject({message: UpdateOfferValidationMessage.city.invalid})
  public city?: City;

  @IsOptional()
  public previewImage?: string;

  @IsOptional()
  @IsArray({message: UpdateOfferValidationMessage.photos.invalidFormat})
  public images?: string[];

  @IsOptional()
  @IsBoolean({message: UpdateOfferValidationMessage.premium.invalidFormat})
  public isPremium?: boolean;

  @IsOptional()
  @IsBoolean({message: UpdateOfferValidationMessage.favorite.invalidFormat})
  public isFavorite?: boolean;

  @IsOptional()
  @Min(1, {message: UpdateOfferValidationMessage.rating.minValue})
  @Max(5, {message: UpdateOfferValidationMessage.rating.maxValue})
  @IsNumber({maxDecimalPlaces: 1}, {message: UpdateOfferValidationMessage.rating.invalidFormat})
  public rating?: number;

  @IsOptional()
  @IsEnum(OfferType, {message: UpdateOfferValidationMessage.type.invalid})
  public type?: OfferType;

  @IsOptional()
  @Min(1, {message: UpdateOfferValidationMessage.roomCount.minValue})
  @Max(8, {message: UpdateOfferValidationMessage.roomCount.maxValue})
  @IsNumber({}, {message: UpdateOfferValidationMessage.roomCount.invalidFormat})
  public bedrooms?: number;

  @IsOptional()
  @Min(1, {message: UpdateOfferValidationMessage.guestCount.minValue})
  @Max(10, {message: UpdateOfferValidationMessage.guestCount.maxValue})
  @IsNumber({}, {message: UpdateOfferValidationMessage.guestCount.invalidFormat})
  public maxAdults?: number;

  @IsOptional()
  @Min(100, {message: UpdateOfferValidationMessage.price.minValue})
  @Max(1000000, {message: UpdateOfferValidationMessage.price.maxValue})
  @IsNumber({}, {message: UpdateOfferValidationMessage.price.invalidFormat})
  public price?: number;

  @IsOptional()
  @IsArray({message: UpdateOfferValidationMessage.amenities.invalidFormat})
  @IsEnum(Good, {each: true, message: UpdateOfferValidationMessage.amenities.invalidAmenityFormat})
  public goods?: Good[];

  @IsOptional()
  @IsNumber({}, {message: UpdateOfferValidationMessage.latitude.invalidFormat})
  public location?: Location;
}
