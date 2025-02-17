import { DisplayObject, RendererPlugin, globalContainer } from '@antv/g';
import { Module, Syringe } from 'mana-syringe';
import {
  BlendFactor,
  BlendMode,
  BufferFrequencyHint,
  BufferGeometry,
  ChannelWriteMask,
  CompareMode,
  CullMode,
  Fog,
  FogType,
  Format,
  FrontFaceMode,
  GPUMapMode,
  GPUTextureUsage,
  Light,
  Material,
  Mesh,
  MipFilterMode,
  PrimitiveTopology,
  SamplerFormatKind,
  ShaderMaterial,
  StencilOp,
  TextureDimension,
  TextureUsage,
  GL,
  VertexAttributeLocation,
  VertexBufferFrequency,
  WrapMode,
} from '@antv/g-plugin-webgl-renderer';

export * from './geometries';
export * from './materials';
export * from './lights';
export {
  BlendFactor,
  BlendMode,
  BufferFrequencyHint,
  BufferGeometry,
  ChannelWriteMask,
  CompareMode,
  CullMode,
  Fog,
  FogType,
  Format,
  FrontFaceMode,
  GPUMapMode,
  GPUTextureUsage,
  Light,
  Material,
  Mesh,
  MipFilterMode,
  PrimitiveTopology,
  SamplerFormatKind,
  ShaderMaterial,
  StencilOp,
  TextureDimension,
  TextureUsage,
  GL,
  VertexAttributeLocation,
  VertexBufferFrequency,
  WrapMode,
};

// // TODO: provide more friendly API like `registerGeometry`
// globalContainer.register(CubeUpdater);
// globalContainer.register(SphereUpdater);
// globalContainer.register(GridUpdater);

export const containerModule = Module((register) => {
  //   registerModelBuilder(CubeModelBuilder, SHAPE_3D.Cube);
  //   // registerModelBuilder(SphereModelBuilder, SHAPE_3D.Sphere);
  //   registerModelBuilder(GridModelBuilder, SHAPE_3D.Grid);
});

export class Plugin implements RendererPlugin {
  init(container: Syringe.Container): void {
    container.load(containerModule, true);
  }
  destroy(container: Syringe.Container): void {
    container.unload(containerModule);
  }
}
