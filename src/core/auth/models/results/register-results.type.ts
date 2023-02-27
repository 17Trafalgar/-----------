import { Field, ObjectType } from '@nestjs/graphql';
import { BaseResultsType } from '../../../../common/models/results';
import { User } from '../../../user/models/user.model';

@ObjectType()
export class RegisterResultsType extends BaseResultsType {
    @Field(() => String, { nullable: true })
    access_token?: string;

    @Field(() => User, {
        nullable: true,
        description: 'User',
    })
    user: User | null;
}
