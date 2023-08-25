import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateIssueSummaryDto {
  @ApiProperty({
    description: "Summary Length",
    type: "integer",
    example: 250,
  })
  @IsNumber()
  @Min(100)
  @Max(500)
  summaryLength: number;

  @ApiProperty({
    description: "Summary Temperature",
    type: "integer",
    example: 7,
  })
  @IsNumber()
  @Min(0)
  @Max(10)
  temperature: number;

  @ApiProperty({
    description: "Summary Tone",
    type: String,
    example: "formal",
  })
  @IsString()
  @IsIn(["exciting", "persuasive", "informative", "humorous", "formal"])
  tone: string;

  @ApiProperty({
    description: "Summary Language",
    type: String,
    example: "english",
    default: "english",
  })
  @IsString()
  @IsIn(["english", "spanish", "french", "german", "italian", "portuguese", "dutch", "russian", "chinese", "korean"])
  language: string;

  @ApiProperty({
    description: "Issue Title",
    type: String,
  })
  @IsString()
  issueTitle: string;

  @ApiProperty({
    description: "Issue Description",
    type: String,
  })
  @IsString()
  issueDescription: string;

  @ApiProperty({
    description: "Issue Comments",
    type: String,
  })
  @IsString()
  issueComments: string;
}
