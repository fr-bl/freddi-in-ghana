{
  description = "A basic flake with a shell";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.05";
  inputs.systems.url = "github:nix-systems/default";
  inputs.flake-utils = {
    url = "github:numtide/flake-utils";
    inputs.systems.follows = "systems";
  };
  inputs.treefmt-nix = {
    url = "github:numtide/treefmt-nix";
    inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = {
    nixpkgs,
    flake-utils,
    treefmt-nix,
    ...
  }:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = nixpkgs.legacyPackages.${system};
        treefmtCfg = {
          projectRootFile = "flake.nix";
          programs = {
            alejandra.enable = true;
            prettier = {
              enable = true;
              includes = ["*.astro"];
              settings.plugins = ["prettier-plugin-astro"];
            };
          };
        };
      in {
        formatter = (treefmt-nix.lib.evalModule pkgs treefmtCfg).config.build.wrapper;
        devShells.default = pkgs.mkShell {
          packages = [pkgs.bun pkgs.google-lighthouse];
        };
      }
    );
}
