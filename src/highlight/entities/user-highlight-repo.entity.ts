import { ApiModelProperty } from "@nestjs/swagger/dist/decorators/api-model-property.decorator";

export class DbUserHighlightRepo {
  @ApiModelProperty({
    description: "Highlight Repo Full Name",
    example: "depsdev/insights",
  })
  public full_name?: string;
}
