import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class CreateInsightMemberDto {
  @ApiProperty({
    description: "Insight Team Member Invite Email",
    type: String,
    example: "hello@depsdev.github.io",
  })
  @IsEmail()
  email: string;
}
