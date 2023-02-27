import { Field, ObjectType } from '@nestjs/graphql';
import { BaseResultsType } from '../../../../common/models/results';
import { Genre } from '../genre.model';

@ObjectType()
export class UpdateGenreResultsType extends BaseResultsType {
    @Field(() => Genre, {
        nullable: true,
        description: 'Genre',
    })
    genre: Genre | null;
}
